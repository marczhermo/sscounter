import React, { useState } from 'react';
// import { loadComponent } from 'lib/Injector';

const SSCounterField = ({ extraClass, value, id, name, onChange }) => {
  const [count, setCount] = useState(parseInt(value, 10));

  const increment = (event) => {
    setCount((preValue) => preValue + 1);
    onChange(event, { id, value: count });
  };

  // const Loading = loadComponent('Loading', {});

  return (
    <div className={`sscounter-react-component ${extraClass}`} data-name={name}>
      <button className="btn btn-lg font-icon-plus" onClick={increment}>
        <span className="btn__title">{value} / {count}</span>
      </button>
    </div>
  );
};

export default SSCounterField;
