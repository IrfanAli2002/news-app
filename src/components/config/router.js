import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Dashboard from "../pages/dashboard";
  
  export default function Approuter() {
    return (
      <Router>
          <Routes>
              <Route path="/*" element={<Dashboard/>}/>
           
          </Routes>
 
      </Router>
    );
  }
  