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
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="App Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
        <li>Online Status: {onlineStatus ? '✅' : '⛔'}</li>
          <li><Link to = "/">Home</Link></li>
          <li><Link  to="about" >About Us</Link></li> 
          <li><Link to="contact">Contact Us</Link></li>
          <li><Link to="grocery">Grocery</Link></li>
          <li>Cart</li>
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
