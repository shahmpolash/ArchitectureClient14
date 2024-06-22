import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";



const NavBar = () => {

  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  const [users, setUser] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((info) => setUser(info));
  }, []);




  return (





<>
<header className="main-header header-two">
  {/*Header-Upper*/}
  <div className="header-upper">
    <div className="container clearfix">
      <div className="header-inner py-20">
        <div className="nav-outer clearfix">
          {/* Main Menu */}
          <nav className="main-menu navbar-expand-lg">
            <div className="navbar-header">
              <div className="logo-mobile"><a href="/"><img src="assets/images/logos/logo-white.png" alt="Logo" /></a></div>
              {/* Toggle Button */}
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="main-menu">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            <div className="navbar-collapse collapse clearfix" id="main-menu">
              <ul className="navigation clearfix">
                
                
                <li><a href="/">Home</a></li>
                <li><a href="#about-sec">About Us</a></li>
                <li><a href="#services-sec">Services</a></li>
                <li><a href="#pricing-sec">Pricing</a></li>
                <li><a href="#contact-sec">contact</a></li>
              </ul>
            </div>
          </nav>
          {/* Main Menu End*/}
        </div>
        <div className="logo-outer mx-lg-auto">
          {
            logo.map(l=><div className="logo"><a href="/"><img src={l.logo} alt="Logo" /></a></div> )
          }
          
        </div>
        <div className="menu-right d-none d-lg-flex align-items-center ml-lg-auto">
          {/* Menu Serch Box*/}
        
          {/* Language Changer*/}
          
          
          {
                  user?.email ?

                    <Link to="/dashboard" className="theme-btn style-five m-2 "   >Dashboard</Link>

                    :

                    <Link to="/login" className="theme-btn style-five" >Log in</Link>

                }


                {
                  users.map(u => u.userEmail === user?.email && u.userRole === 'Admin' &&

                    <Link to="/admin" className="theme-btn style-five m-2"  >Admin</Link>

                  )
                }

        </div>
      </div>
    </div>
  </div>
  {/*End Header Upper*/}
</header>

</>

    
  );
};

export default NavBar;
