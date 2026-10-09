const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const crypto = require('crypto');
const { randomUUID } = require('crypto');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// PhonePe configuration
const MERCHANT_ID = 'TEST-M22J3IF4FMOFT_25042';
// const SALT_KEY = 'ZjA2YmY3NjctNThmNy00NjA1LWIxNTctMWI1OTJjZWY3MDhi';
const SALT_KEY = ''
const SALT_INDEX = 1;
const CLIENT_ID = 'TEST-M22J3IF4FMOFT_25042';
const CLIENT_SECRET = 'ZjA2YmY3NjctNThmNy00NjA1LWIxNTctMWI1OTJjZWY3MDhi';
const CLIENT_VERSION = 1;
const BASE_URL = 'https://api-preprod.phonepe.com/apis/pg-sandbox';

// Test card details for reference
const TEST_CARDS = {
    DEBIT: {
        card_number: "4242424242424242",
        card_type: "DEBIT_CARD",
        card_issuer: "VISA",
        expiry_month: 12,
        expiry_year: 2027,
        cvv: "936"
    },
    CREDIT: {
        card_number: "4208585190116667",
        card_type: "CREDIT_CARD",
        card_issuer: "VISA",
        expiry_month: 6,
        expiry_year: 2027,
        cvv: "508"
    }
};

// Helper function to delay execution
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Helper function to generate X-VERIFY header
const generateXVerify = (base64Payload) => {
    // For /pg/v1/pay endpoint
    const stringToHash = base64Payload + '/pg/v1/pay' + CLIENT_SECRET;
    console.log('Base64 payload:', base64Payload);
    console.log('Endpoint:', '/pg/v1/pay');
    console.log('Client Secret:', CLIENT_SECRET);
    console.log('String to hash:', stringToHash);
    const hash = crypto.createHash('sha256').update(stringToHash).digest('hex');
    const xVerify = hash + '###' + SALT_INDEX;
    console.log('Generated X-VERIFY:', xVerify);
    return xVerify;
};

// Payment initiation endpoint
app.post('/api/payment/initiate', async (req, res) => {
    try {
        const { amount } = req.body;
        console.log('Received payment request:', { amount });

        // Validate amount limits (₹1 to ₹1000)
        if (!amount || amount < 1 || amount > 1000) {
            return res.status(400).json({ 
                error: 'Invalid amount',
                message: 'Amount must be between ₹1 and ₹1000 for testing'
            });
        }

        const merchantTransactionId = 'MT' + Date.now(); // More predictable format
        const redirectUrl = 'http://localhost:5173/payment/status';
        const callbackUrl = 'http://localhost:3000/api/payment/callback';

        // Create payment payload
        const payload = {
            merchantId: MERCHANT_ID,
            merchantTransactionId,
            merchantUserId: 'MUID' + Date.now(),
            amount: amount * 100, // Convert to paise
            redirectUrl,
            redirectMode: 'REDIRECT',
            callbackUrl,
            mobileNumber: '9999999999', // Test mobile number
            paymentInstrument: {
                type: 'PAY_PAGE'
            }
        };

        console.log('Generated payload:', JSON.stringify(payload, null, 2));

        // Convert payload to base64
        const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
        console.log('Base64 payload:', base64Payload);

        // Generate X-VERIFY header
        const xVerify = generateXVerify(base64Payload);
        console.log('Final request headers:', {
            'Content-Type': 'application/json',
            'X-VERIFY': xVerify
        });
        console.log('Final request body:', {
            request: base64Payload
        });

        // Make request to PhonePe API
        const response = await fetch(`${BASE_URL}/pg/v1/pay`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-VERIFY': xVerify
            },
            body: JSON.stringify({
                request: base64Payload
            })
        });

        const responseData = await response.json();
        console.log('PhonePe API response:', JSON.stringify(responseData, null, 2));

        if (responseData.success) {
            res.json({
                success: true,
                redirectUrl: responseData.data.instrumentResponse.redirectInfo.url,
                merchantTransactionId,
                testInfo: {
                    otp: '123456', // Test OTP for bank page
                    testCards: TEST_CARDS
                }
            });
        } else {
            throw new Error(responseData.message || 'Payment initiation failed');
        }
    } catch (error) {
        console.error('Payment initiation error:', error);
        res.status(500).json({ 
            error: 'Payment initiation failed',
            details: error.message
        });
    }
});

// Payment status check endpoint
app.post('/api/payment/status', async (req, res) => {
    try {
        const { merchantTransactionId } = req.body;
        
        if (!merchantTransactionId) {
            return res.status(400).json({ error: 'Merchant transaction ID is required' });
        }

        const payload = {
            merchantId: MERCHANT_ID,
            merchantTransactionId
        };

        // Convert payload to base64
        const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
        const xVerify = generateXVerify(base64Payload);

        const response = await fetch(`${BASE_URL}/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-VERIFY': xVerify
            }
        });

        const responseData = await response.json();
        console.log('Payment status response:', responseData);
        res.json(responseData);
    } catch (error) {
        console.error('Status check error:', error);
        res.status(500).json({ error: 'Status check failed' });
    }
});

// Callback endpoint for PhonePe
app.post('/api/payment/callback', async (req, res) => {
    try {
        const { response } = req.body;
        const decodedResponse = JSON.parse(Buffer.from(response, 'base64').toString());
        console.log('Callback received:', decodedResponse);
        res.status(200).send('OK');
    } catch (error) {
        console.error('Callback error:', error);
        res.status(400).json({ error: 'Invalid callback' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 
