import React from 'react';

// Feature #3: Create category for user to find the sorted item
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

export default CategoryList;