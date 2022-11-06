import React from "react";
import { useNavigate} from 'react-router-dom';

function Navbar()  {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };
  return (
  
    <div className="Nav-bar">
      <h1 id="nav-heading">SMART-SHOP "U"</h1>
      <button id="home" onClick={navigateHome}  type="button">Home</button>
      </div>
  );
};
export default Navbar;
