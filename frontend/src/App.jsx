import { BrowserRouter, createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import Shop from './pages/shop';
import Hero from './Components/Hero';
import Popular from './Components/Popular';
import Offers from './Components/Offers';
import Collections from './Components/Collections';
import NewsLetter from './Components/NewsLetter';
import Footer from './Components/Footer';
import AppLayout from './AppLayout';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import men_banner from './assets/banner_mens.jpg'
import kid_banner from './assets/banner_kids.png'
import women_banner from './assets/banner_women.png'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Shop  />,
        },
        {
          path: '/mens',
          element: <ShopCategory banner={men_banner} category="men" />,
        },
        {
          path: '/womens',
          element: <ShopCategory banner={women_banner} category="women" />,
        },
        {
          path: '/kids',
          element: <ShopCategory banner={kid_banner} category="kid" />,
        },
        {
          path: '/product',
          element: <Product/>,
        },
        {
          path: '/product/:category/:id',
          element: <Product/>,
        },
        {
          path: '/cart',
          element: <Cart/>,
        },
        {
          path: '/login',
          element: <Login/>,
        }


      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
