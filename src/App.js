import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import SearchBar from "./components/SearchBar"
import Videos from "./components/Videos";
import Footer from "./components/Footer";
import About from "./components/About";
import Rooms from "./components/Rooms";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Contacts from "./components/Contacts";


function App() {
  const [nav, setNav] = useState(false);
  const [isWindowLarge, setIsWindowLarge] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      setIsWindowLarge(window.innerWidth >= 1024 ? true : false);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const unlisten = navigate.listen(() => {
      setNav(false);
    });

    return () => unlisten();
  }, [navigate]);

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={
            <Fragment>
              <Navbar nav={nav} setNav={setNav} />
              {!(nav && !isWindowLarge) && (
                <Fragment>
                  <SearchBar />
                  <Hero />
                  <Videos />
                  <Footer />
                </Fragment>
              )}
            </Fragment>
            }>
          </Route>
          <Route exact path="/about" element={
            <Fragment>
              <Navbar nav={nav} setNav={setNav} />
              {!(nav && !isWindowLarge) && <About />}
            </Fragment>
            }> 
          </Route>
          <Route exact path="/contacts" element={
            <Fragment>
              <Navbar nav={nav} setNav={setNav} />
              {!(nav && !isWindowLarge) && (
                <Fragment>
                  <SearchBar />
                  <Contacts />
                  <Footer />
                </Fragment>
              )}
            </Fragment>
            }> 
          </Route>
          <Route exact path="/rooms/:room" element={
            <Fragment>
              <Navbar nav={nav} setNav={setNav} />
              {!(nav && !isWindowLarge) && (
                <Fragment>
                  <SearchBar />
                  <Rooms />
                  <Footer />
                </Fragment>
              )}
            </Fragment>
            }> 
          </Route>
        </Routes>
    </Router>
  );
}

export default App;