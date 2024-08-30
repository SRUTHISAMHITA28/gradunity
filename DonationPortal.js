// src/components/DonationPortal.js
import React, { useState } from 'react';

function DonationPortal() {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the donation (to be implemented)
  };

  return (
    <div className="donation-portal">
      <h2>Donation Portal</h2>
      <form onSubmit={handleSubmit}>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        <label>Payment Method:</label>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
          <option value="upi">UPI</option>
          <option value="net_banking">Net Banking</option>
          <option value="credit_debit_card">Credit/Debit Card</option>
        </select>
        <button type="submit">Donate</button>
      </form>
    </div>
  );
}

export default DonationPortal;
