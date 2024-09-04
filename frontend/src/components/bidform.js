import React, { useState } from 'react';
import api from '../services/api';

/**
 * BidForm component - form to place a new bid on an item
 * @param {string} itemId - The ID of the item to bid on
 * @returns {JSX.Element} The BidForm component
 */
const BidForm = ({ itemId }) => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await api.placeBid(itemId, amount);
      setMessage('Bid placed successfully!');
      // Feature #1: Create a warning/alert to the user when the bid is placed
      alert('Your bid has been placed successfully!');
      // You might want to do something with the response, like updating the UI
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setMessage(`Error placing bid: ${error.response.data.message}`);
      } else if (error.request) {
        // The request was made but no response was received
        setMessage('Error: No response received from server. Please check your connection.');
      } else {
        // Something happened in setting up the request that triggered an Error
        setMessage(`Error: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter bid amount"
        required
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Placing Bid...' : 'Place Bid'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default BidForm;