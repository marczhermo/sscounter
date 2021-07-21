import React, { useState } from 'react';

const SSCounterField = ({extraClass, value, id, name, onChange, ...props}) => {

  const increment = (event) => {
    onChange(event, { id, value: value+1})
  };

  return (
    <div className="sscounter-react-component">
      <input
        type="hidden"
        className={extraClass}
        value={value}
        id={id}
        name={name}
      />
      <button className="btn btn-lg font-icon-plus" onClick={increment}>
        <span className="btn__title">{value}</span>
      </button>
    </div>
  );
};

export default SSCounterField;