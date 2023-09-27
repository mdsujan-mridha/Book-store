import { Fragment } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Signup from './components/User/Signup';
import Login from "./components/User/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Fragment>

      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/register' element={<Signup />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
        </Routes>
        <Footer />
      </Router>

    </Fragment>
  );
}

export default App;
