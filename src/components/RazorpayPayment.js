import React, { useState } from 'react';
import axios from 'axios';
function RazorpayPayment() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const handlePaymentSuccess = async () => {
    try {
      const response = await axios.post('rzp_test_TohCwbizQkIaGC', {
        amount: 1000,
      });
      const razorpay = new window.Razorpay({
        key: 'eNyC93faH4yHzFpuhwkTAiIN',
        order_id: response.data.id,
        handler: function (response) {
          setPaymentSuccess(true);
          console.log('Payment successful:', response);
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: 'customer_contact_number',
        },
        theme: {
          color: '#3399cc',
        },
      });
      razorpay.open();
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
    }
  };
  return (
    <div>
    {paymentSuccess ? (
      <div>
        <p>Payment successful! Thank you for your order.</p>
      </div>
    ) : (
      <div>
        <p>Click the button below to make a secure payment:</p>
        <button onClick={handlePaymentSuccess} className="btn">
          Pay with Razorpay
        </button>
      </div>
    )}
  </div>
  );
}
export default RazorpayPayment;