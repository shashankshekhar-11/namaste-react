import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';


const Header = () => {
  //   let btnName = 'Login';

  const [btnNameReact, setBtnNameReact] = useState('Login');
  const onlineStatus = useOnlineStatus();
  //console.log('header render');

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);
  
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

          <li className='px-4 font-bold'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
