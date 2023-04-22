import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className="App">
    <ToastContainer position ="bottom-center" limit={1}/>
      <NavBar />
      <Banner />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
