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
import React from 'react'; // Import the React library

/**
 * CategoryList Component
 * @param {Object} props - React props
 * @param {Array} props.categories - An array of category objects
 * @returns {JSX.Element} The CategoryList component
 */
const CategoryList = ({ categories }) => {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <h3>{category.name}</h3>
            <ul>
              {category.items.map((item) => (
                <li key={item.id}>
                  {item.name}
                  <ul>
                    {item.bulletPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList; // Export the CategoryList component