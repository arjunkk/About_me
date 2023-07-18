import React from 'react';
import './Greeting.css';

const Greeting = () => {
  const myDate = new Date();
  const hrs = myDate.getHours();
  let greet;

  if (hrs < 12)
    greet = 'Good Morning!';
  else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon!';
  else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening!';

  return (
    <div className='greet'>
      <h1>{greet}</h1>
    </div>
  );
};

export default Greeting;
