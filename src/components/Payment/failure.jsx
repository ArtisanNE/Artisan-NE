import React from 'react';
import { XCircle } from 'lucide-react';

const PaymentFailedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <XCircle className="text-red-500" size={64} />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Failed</h1>
        <p className="text-gray-600 mb-6">
          We're sorry, but we couldn't process your payment. Please check your payment details and try again.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Error Code:</span>
            <span className="font-medium">ERR_PAYMENT_DECLINED</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Transaction Reference:</span>
            <span className="font-medium">REF78901234</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <button 
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
            onClick={() => window.location.href = '/checkout'}
          >
            Try Again
          </button>
          
          <button
            className="w-full py-2 px-4 bg-white hover:bg-gray-50 text-gray-700 underline font-medium rounded-md transition-colors"
            onClick={() => window.location.href = '/support'}
          >
            Contact Support
          </button>
        </div>
      </div>
      
      <div className="mt-6 text-gray-500 text-sm">
        <p>Common reasons for payment failure:</p>
        <ul className="list-disc text-left mt-2 pl-5 max-w-md">
          <li>Insufficient funds</li>
          <li>Incorrect card details</li>
          <li>Transaction flagged by bank security</li>
          <li>Expired card</li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentFailedPage;