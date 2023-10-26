import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./needful.scss";

function ActiveButton({ to, isActive, children }) {

  return isActive ? (
    <Link onClick={() => setPath("/user")} to={"/user"}>
      <div className="active-link active">
        <span className="active-left"></span>
        {children}
        <span className="active-right"></span>
        <span className="active-bottom"></span>
      </div>
    </Link>
  ) : (
    <Link onClick={() => setPath("/user")} to={to}>
      <div className="active-not">{children}</div>
    </Link>
  );
}

export default ActiveButton;
