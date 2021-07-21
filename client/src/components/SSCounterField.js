import React, { useState } from 'react';

const SSCounterField = ({extraClass, value, id, name, ...props}) => {

  const [currentValue, setCurrentValue] = useState(parseInt(value));

  const increment = (event) => {
    setCurrentValue(currentValue + 1);
  };

  return (
    <div className="sscounter-react-component">
      <input
        type="hidden"
        className={extraClass}
        value={currentValue}
        id={id}
        name={name}
      />
      <button className="btn btn-lg font-icon-plus" onClick={increment}>
        <span className="btn__title">{currentValue}</span>
      </button>
    </div>
  );
};

export default SSCounterField;
