import { Fragment, useEffect, useState, } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Signup from './components/User/Signup';
import Login from "./components/User/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './components/User/Profile';
import axios from 'axios';
import store from "./store";
import { loadUser } from './components/Action/userAction';
import Books from './components/Books/Books';
import ExChangeBooks from './components/Books/ExChangeBooks';
import Dashboard from './components/Admin/Dashboard';
import BuyBooks from './components/Books/BuyBooks';
import BookDetails from './components/Books/BookDetails';
import Cart from './components/Cart/Cart';
import Shipping from './components/Cart/Shipping';
import ConfirmOrder from './components/Cart/ConfirmOrder';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import BookDetailsModal from './components/Books/BookDetailsModal';
import RequestBookDetails from './components/Books/RequestBookDetails';
import { useSelector } from 'react-redux';
import Payment from './components/Cart/Payment';
import ProtectedRoute from './components/Route/ProtectedRoute';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  // console.log(user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  axios.defaults.withCredentials = true;

  async function getStripeApiKey() {
    const { data } = await axios.get("http://localhost:5000/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }
  console.log(stripeApiKey);

  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, [])

  return (
    <Fragment>

      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Signup />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          {/* it will protected  */}
          <Route path='/book/request' element={<Books />}></Route>
          <Route path='/book/request/:id' element={<RequestBookDetails />}></Route>
          {/* it will protected  */}
          <Route path='/book/exchnage' element={<ExChangeBooks />}></Route>
          <Route path='/sell/books' element={<BuyBooks />}></Route>
          <Route path='/sell/books/:id' element={<BookDetails />}></Route>
          <Route path='/exchange/books/:id' element={<BookDetailsModal />}></Route>
          {/* protected route  user*/}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/account' element={<Profile />} ></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/shipping' element={<Shipping />}></Route>
            <Route path='/order/confirm' element={<ConfirmOrder />}></Route>
            <Route>
              {stripeApiKey && (
                <Route
                  path="/process/payment"
                  element={
                    <Elements stripe={loadStripe(stripeApiKey)} >
                      <Payment stripeApiKey={stripeApiKey} />
                    </Elements>
                  }
                >
                </Route>
              )}
            </Route>
          </Route>

          {/* admin route  */}

          <Route path='/admin/dashboard' element={<Dashboard />} ></Route>

        </Routes>
        <Footer />
      </Router>

    </Fragment >
  );
}

export default App;
