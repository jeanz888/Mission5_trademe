import React, { useState } from 'react';

// Feature #4: Important information will be highlighted/bolded. Create a show more button to hide extra information.
const ItemDetails = ({ item }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <h2>{item.name}</h2>
      <p><strong>Price:</strong> ${item.price}</p>
      <p><strong>Category:</strong> {item.category}</p>
      <p>{item.shortDescription}</p>
      {showMore && (
        <div>
          <h3>Detailed Description</h3>
          <p>{item.longDescription}</p>
        </div>
      )}
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default ItemDetails;