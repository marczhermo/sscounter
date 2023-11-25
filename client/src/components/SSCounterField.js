import React, { useState } from 'react';
import Loading from './Loading'

/* eslint-disable */
const MyTitle = React.lazy(() => import('./MyTitle'));
// const MyTitle = React.lazy(() => import('mycounter/MyTitle'));

const SSCounterField = (props) => {
  const initialValue = parseInt(props.value || 0, 10);
  const [count, setCount] = useState(initialValue);

  const increment = (event) => {
    setCount((preValue) => preValue + 1);
    props.onChange(event, { id: props.id, value: count });
  };

  // const btnArgs = {
  //   color: 'primary',
  //   size: 'md',
  //   icon: '',
  //   outline: false,
  //   block: false,
  //   active: false,
  //   disabled: false,
  //   noText: false,
  //   className: '',
  //   children: 'click me'
  // };

  return (
    <div className={`sscounter-react-component ${props.extraClass}`} data-name={props.name}>
      <button className="btn btn-lg font-icon-plus" onClick={increment}>
        <span className="btn__title">{props.value} / {count}</span>
      </button>
      <React.Suspense fallback={<Loading />}>
        <MyTitle />
      </React.Suspense>
    </div>
  );
};

export default SSCounterField;
