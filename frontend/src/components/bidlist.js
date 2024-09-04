import React, { useState, useEffect } from 'react';
import api from '../services/api';

/**
 * BidList component - displays a list of bids placed by the user
 * @param {string} userId - The ID of the user whose bids are to be fetched
 * @returns {JSX.Element} The BidList component
 */s
const BidList = ({ userId }) => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
     // Fetch the user's bids when userId changes
    const fetchBids = async () => {
      const userBids = await api.getUserBids(userId);
      setBids(userBids);
    };
    fetchBids();
  }, [userId]);

  // Feature #5: Create a list of placed bid for user
  return (
    <div>
      <h2>Your Bids</h2>
      <ul>
        {bids.map((bid) => (
          <li key={bid._id}>
            Item: {bid.itemId}, Amount: ${bid.amount}, Status: {bid.status}
            {bid.status === 'lost' && (
              <button onClick={() => alert('Do you want to place a new bid?')}>Rebid</button>
            )}
            {bid.status === 'won' && <p>Congratulations! You won this bid.</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BidList;