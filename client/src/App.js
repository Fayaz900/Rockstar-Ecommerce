import './App.css';
import Home from './features/pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from './features/pages/LoginPage';
import SignupPage from './features/pages/SignupPage';
import CartPage from './features/pages/CartPage';
import Checkout from './features/pages/Checkout';
import ProductDetailPage from './features/pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
  { 
    path: "/cart",
    element: <CartPage/>,
  },
  { 
    path: "/checkout",
    element: <Checkout/>,
  },
  { 
    path: "/product-detail",
    element: <ProductDetailPage/>,
  },
]);

function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
