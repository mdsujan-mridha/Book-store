import { Fragment, useEffect, } from 'react';
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
function App() {

  axios.defaults.withCredentials = true;

  useEffect(() => {
    store.dispatch(loadUser())
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
          {/* it will protected  */}
          <Route path='/book/request' element={<Books />}></Route>
          {/* it will protected  */}
          <Route path='/book/exchnage' element={<ExChangeBooks />}></Route>
          {/* protected route  */}
          <Route path='/account' element={<Profile />} ></Route>

          {/* admin route  */}

          <Route path='/admin/dashboard' element={<Dashboard />} ></Route>

        </Routes>
        <Footer />
      </Router>

    </Fragment>
  );
}

export default App;
