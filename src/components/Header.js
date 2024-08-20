import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


const Header = () => {
  //   let btnName = 'Login';
  const onlineStatus = useOnlineStatus();
  const [btnNameReact, setBtnNameReact] = useState('Login');
  //console.log('header render');

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div className="logo-container">
        <img src={LOGO_URL} alt="App Logo" className="w-56" />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
        <li className="p-4">Online Status: {onlineStatus ? '✅' : '⛔'}</li>
          <li className="p-4"><Link to = "/">Home</Link></li>
          <li className="p-4"><Link  to="about" >About Us</Link></li> 
          <li className="p-4"><Link to="contact">Contact Us</Link></li>
          <li className="p-4"><Link to="grocery">Grocery</Link></li>
          <li className="p-4">Cart</li>
          <button
            className="loginBtn"
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
