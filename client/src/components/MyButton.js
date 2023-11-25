import React from 'react';
import { loadComponent } from 'lib/Injector';

const MyButton = (props) => {
  const Button = loadComponent('Button', {});

  return (
    <div className="sscounter-react-component" >
      <Button {...props} />
    </div>
  );
};

export default MyButton;
