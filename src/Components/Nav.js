import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="navBar">
      <Link to="/">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Students"> Students</Link>
    </div>
  );
}
