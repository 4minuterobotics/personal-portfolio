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

// import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <div className="App">
    {/* <Helmet>
      <title>William's Portfolio</title>
      <meta charSet='utf-8'/>
      <meta name="description" content="Welcome! Check out my Web Developer portfolio website 
                                        for example projects and to learn more about me. I'm 
                                        always happy to answer questions or talk about potential 
                                        collaborations. " />
      <link rel="icon" type="image" href="./src/assets/img/logo.png" />
    </Helmet> */}

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
