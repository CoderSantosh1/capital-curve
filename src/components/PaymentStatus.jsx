import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const PaymentStatus = () => {
    const location = useLocation();
    const [status, setStatus] = useState('Checking payment status...');
    const [error, setError] = useState('');

    useEffect(() => {
        const checkPaymentStatus = async () => {
            try {
                const searchParams = new URLSearchParams(location.search);
                const merchantTransactionId = searchParams.get('merchantTransactionId');

                if (!merchantTransactionId) {
                    setError('Invalid payment response');
                    return;
                }

                const response = await axios.post('http://localhost:3000/api/payment/status', {
                    merchantTransactionId
                });

                if (response.data && response.data.code === 'PAYMENT_SUCCESS') {
                    setStatus('Payment Successful!');
                } else if (response.data && response.data.code === 'PAYMENT_ERROR') {
                    setStatus('Payment Failed');
                    setError(response.data.message || 'Payment failed. Please try again.');
                } else {
                    setStatus('Payment Pending');
                }
            } catch (err) {
                console.error('Status check error:', err);
                setError('Failed to check payment status');
            }
        };

        checkPaymentStatus();
    }, [location]);

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Payment Status</h2>
            
            <div className="text-center">
                <div className={`text-lg font-semibold mb-4 ${
                    status === 'Payment Successful!' ? 'text-green-600' : 
                    status === 'Payment Failed' ? 'text-red-600' : 'text-yellow-600'
                }`}>
                    {status}
                </div>

                {error && (
                    <div className="text-red-500 text-sm">{error}</div>
                )}

                <button
                    onClick={() => window.location.href = '/'}
                    className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Return to Home
                </button>
            </div>
        </div>
    );
};

export default PaymentStatus; 