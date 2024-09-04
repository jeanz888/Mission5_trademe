import React from 'react';

// Feature #2: Display two or more comparison items in a page
const ItemComparison = ({ items }) => {
  return (
    <div className="item-comparison">
      <h2>Item Comparison</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {items.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Description: {item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemComparison;