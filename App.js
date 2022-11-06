import "./styles.css";
import Navbar from "./Navbar.jsx";
import {Routes, Route} from "react-router-dom";
import Home from "./Home.js";
export default function App() {
  return (<div>
    <Navbar />
    
<Routes>
<Route exact path="/" element={<Home />} />

</Routes>
    </div>
 );
}
