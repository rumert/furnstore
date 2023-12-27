import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import SearchBar from "./components/SearchBar"
import Videos from "./components/Videos";
import Footer from "./components/Footer";
import About from "./components/About";
import Rooms from "./components/Rooms";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from "./components/Contacts";


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={
            <Fragment>
              <Navbar />
              <SearchBar />
              <Hero />
              <Videos />
              <Footer />
            </Fragment>
            }>
          </Route>
          <Route exact path="/about" element={
            <Fragment>
              <div className="flex flex-col h-screen">
                <Navbar />
                <SearchBar />
                <About />
              </div>
            </Fragment>
            }> 
          </Route>
          <Route exact path="/contacts" element={
            <Fragment>
              <div className="flex flex-col h-screen">
                <Navbar />
                <SearchBar />
                <Contacts />
                <Footer />
              </div>
            </Fragment>
            }> 
          </Route>
          <Route exact path="/rooms/:room" element={
            <Fragment>
              <Navbar />
              <SearchBar />
              <Rooms />
              <Footer />
            </Fragment>
            }> 
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
