import React from 'react';

function searchField({ searchChange }) {
  return (
    <div className="field-container">
      <input
        onChange={searchChange}
        type="text"
        placeholder="Search robots..."
      />
    </div>
  );
}

export default searchField;
