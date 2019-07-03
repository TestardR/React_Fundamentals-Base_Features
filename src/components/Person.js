import React from 'react';
import './Person.css';

const Person = props => {
  const { name, age, children, click, changed } = props;
  console.log(props);
  return (
    <div className="Person">
      <h2 onClick={click}>
        I am {name} and I am {age} years old
      </h2>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default Person;
