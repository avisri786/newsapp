import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<News pagesize={6} country="in" category="" />}/>
            
          
          <Route path="/general" element={<News key="general" pagesize={6} country="in" category="General" />}/>
            
          
          <Route path="/business" element={<News key="business" pagesize={6} country="in" category="Business" />}/>
            
          
          <Route path="/entertainment" element={<News key="entertainment" pagesize={6} country="in" category="Entertainment" />}/>
            
          
          <Route path="/health" element={<News key="health" pagesize={6} country="in" category="Health" />}/>
            
          
          <Route path="/science" element={<News key="science" pagesize={6} country="in" category="Science" />}/>
            
          
          <Route path="/sports" element={<News key="sports" pagesize={6} country="in" category="Sports" />}/>
            
          
          <Route path="/technology" element={<News key="technology" pagesize={6} country="in" category="Technology" />}/>
        
        </Routes>
      </div>
    );
  }
}
