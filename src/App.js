import React, { Children, lazy,Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter , Outlet, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Grocery from './components/Grocery';
import UserContext from './utils/UserContext';
import appStore from './utils/appStore';
import Cart from './components/Cart';
/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */







const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Shashank</strong>
      </p>
    </footer>
  );
};
//lazy loading,chunking,on demand loading,code splitting,synamic import

const Grocery = lazy(() => import('./components/Grocery'));


const AppLayout = () => {
  // console.log(<Body />);
  const[userName,setUserName] = useState();
//authentication
useEffect(() =>{

//APi call to send username and password
const data = {
    name :"Shashank"
  };

  setUserName(data.name);
} ,[]);

  return (
    <Provider store={appStore}>
       <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
   
  );
};


const appRouter = createBrowserRouter([
 {
    path: "/",
    element: <AppLayout />,
    children :[
      {
        path :"/",
        element : <Body />
      },
      {
        path : "/about",
        element : <About />,
      },
      {
        path : "/contact",
        element : <Contact />,
      },
      {
        path : "/grocery",
        element : <Suspense fallback={<h2>Loading.....</h2>}><Grocery /></Suspense>,
      },
      {
        path :"restaurants/:resId",
        element : <RestaurantMenu />
      },
      {
        path:"/cart",
        element : <Cart />
      }
    ],
    errorElement :<Error />,
  },
 
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router ={appRouter} />);
