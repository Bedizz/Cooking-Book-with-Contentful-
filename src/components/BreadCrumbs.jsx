import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../components/BreadCrumbs.css";


const BreadCrumbs = () => {
  const location = useLocation();

  let currentLink = "";
  

  // Initialize currentLink variable outside of the map function
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    }); // Add a missing closing parenthesis at the end of the map function

  return <div className="breadcrumbs">{crumbs} </div>;
};

export default BreadCrumbs;
