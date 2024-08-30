import React, { useState } from 'react';
import axios from 'axios';

const DonationPortal = () => {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('UPI');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/donations', { amount, method });
      alert('Thank you for your donation!');
    } catch (error) {
      console.error('Donation failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option value="UPI">UPI</option>
        <option value="Net Banking">Net Banking</option>
        <option value="Credit/Debit Card">Credit/Debit Card</option>
      </select>
      <button type="submit">Donate</button>
    </form>
  );
};

export default DonationPortal;
