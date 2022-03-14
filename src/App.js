import "./App.css";

import React,{useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
  const [progress, setprogress] = useState(0)
  const apikey = process.env.REACT_APP_API_KEY
 
 
  
    return (
      <div>
        
        <Navbar />
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <Routes>
          <Route path="/" element={<News apikey={apikey}  setprogress={setprogress}   pagesize={6} country="in" category="" />}/>
            
          
          <Route path="/general" element={<News apikey={apikey}  setprogress={setprogress}   key="general" pagesize={6} country="in" category="General" />}/>
            
          
          <Route path="/business" element={<News apikey={apikey}  setprogress={setprogress}   key="business" pagesize={6} country="in" category="Business" />}/>
            
          
          <Route path="/entertainment" element={<News apikey={apikey}  setprogress={setprogress}   key="entertainment" pagesize={6} country="in" category="Entertainment" />}/>
            
          
          <Route path="/health" element={<News apikey={apikey}  setprogress={setprogress}   key="health" pagesize={6} country="in" category="Health" />}/>
            
          
          <Route path="/science" element={<News apikey={apikey}  setprogress={setprogress}   key="science" pagesize={6} country="in" category="Science" />}/>
            
          
          <Route path="/sports" element={<News apikey={apikey}  setprogress={setprogress}   key="sports" pagesize={6} country="in" category="Sports" />}/>
            
          
          <Route path="/technology" element={<News apikey={apikey}  setprogress={setprogress}   key="technology" pagesize={6} country="in" category="Technology" />}/>
        
        </Routes>
      </div>
    );
  }
export default App
