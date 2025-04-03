import { useEffect, useState } from 'react';

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    // * API call
    // async function getUserInfo() {
    // }
  }, []);

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Sangrur</h3>
      <h4>Contact: @Shashank@11</h4>
    </div>
  );
};

export default User;
