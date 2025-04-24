import React, { useState } from 'react';
import axios from 'axios';

const Payment = () => {
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!amount || amount <= 0) {
            setError('Please enter a valid amount');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/payment/initiate', {
                amount: parseFloat(amount)
            });

            if (response.data && response.data.success && response.data.redirectUrl) {
                window.location.href = response.data.redirectUrl;
            } else {
                setError('Failed to initiate payment: Invalid response format');
            }
        } catch (err) {
            console.error('Payment error:', err.response?.data || err.message);
            setError(err.response?.data?.error || err.response?.data?.details || 'Failed to process payment. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">PhonePe Payment</h2>
            
            <form onSubmit={handlePayment} className="space-y-4">
                <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                        Amount (INR)
                    </label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                        min="1"
                        step="0.01"
                    />
                </div>

                {error && (
                    <div className="text-red-500 text-sm p-2 bg-red-50 rounded-md">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                    {loading ? 'Processing...' : 'Pay with PhonePe'}
                </button>
            </form>
        </div>
    );
};

export default Payment; 