import React from 'react';
import { CheckCircle } from 'lucide-react';

const PaymentSuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="text-green-500" size={64} />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your payment. Your transaction has been completed successfully.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Transaction ID:</span>
            <span className="font-medium">TXN12345678</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Amount Paid:</span>
            <span className="font-medium">$99.99</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Date:</span>
            <span className="font-medium">{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-gray-500 text-sm">
        <p>If you have any questions, please contact our <a href="/support" className="text-blue-600 hover:underline">support team</a>.</p>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;