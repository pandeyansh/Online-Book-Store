import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

function RazorpayPayment() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePaymentSuccess = async () => {
    try {
      // Make an API call to create a Razorpay order
      const response = await axios.post('rzp_test_TohCwbizQkIaGC', {
        amount: 1000, // Amount in paisa (10 rupees)
      });

      // Initialize Razorpay instance with the order details
      const razorpay = new window.Razorpay({
        key: 'eNyC93faH4yHzFpuhwkTAiIN', // Replace with your actual Razorpay API key
        order_id: response.data.id, // Use the order ID from the API response
        handler: function (response) {
          // Handle the successful payment response here
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

      // Open the Razorpay payment modal
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
        {/* Display order details and confirmation */}
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
