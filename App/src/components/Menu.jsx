import "./Menu.css";

import { NavLink } from "react-router-dom";

import { useState } from "react";



const Menu = () => {

  const [mobileActive, setMobileActive] = useState('')

  return (
    <>
      <ul className="menu desktop">
        <NavLink to="/" activeClassName="active" className={"item"}>
          About
        </NavLink>
        <NavLink to="/Skills" activeClassName="active" className={"item"}>
          Skills
        </NavLink>
        <NavLink to="/Jorney" activeClassName="active" className={"item"}>
          Jorney
        </NavLink>
        <NavLink to="/Courses" activeClassName="active" className={"item"}>
          Courses
        </NavLink>
        <NavLink to="/Project" activeClassName="active" className={"item"}>
          Project
        </NavLink>
        <NavLink to="/Repository" activeClassName="active" className={"item"}>
          Git
        </NavLink>
      </ul>
      <menu className="mobile">
        <div className="wobble"></div>
        <div className="wobble"></div>
        <div
          id="toggle-nav"
          className="toggle"
          onClick={() =>
            setMobileActive(mobileActive === "active" ? "" : "active")
          }
        >
          <i
            className={
              mobileActive === "active"
                ? "fa-solid fa-xmark fa-xl"
                : "fa-solid fa-bars fa-xl"
            }
          ></i>
        </div>

        <nav>
          <NavLink
            to="/Project"
            className={`nav-item ${mobileActive === 'active' ? 'slide-out' : ''}`}
            
          >
            <div>
              <i class="fa-solid fa-screwdriver-wrench"></i>
            </div>
          </NavLink>
          <NavLink
            to="/Skills"
            className={`nav-item ${mobileActive === 'active' ? 'slide-out' : ''}`}
            
          >
            <div>
            <i class="fa-solid fa-brain"></i>
            </div>
          </NavLink>
          <NavLink
            to="/Jorney"
            className={`nav-item ${mobileActive === 'active' ? 'slide-out' : ''}`}
            
          >
            <div>
            <i class="fa-solid fa-briefcase"></i>
            </div>
          </NavLink>
          <NavLink
            to="/Courses"
            className={`nav-item ${mobileActive === 'active' ? 'slide-out' : ''}`}
            
          >
            <div>
            <i class="fa-solid fa-graduation-cap"></i>
            </div>
          </NavLink>
          <NavLink
            to="/"
            className={`nav-item ${mobileActive === 'active' ? 'slide-out' : ''}`}
          >
            <div>
            <i class="fa-solid fa-address-card"></i>
            </div>
          </NavLink>
        </nav>
      </menu>
    </>
  );
};

export default Menu;
