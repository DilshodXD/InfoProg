import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

function Create() {
  const [title, setTitle] = useState("");

  return (
    <div>
      <div className="navbar">
        <div className="container-xxl">
          <div className="navbar-inner">
            <h1 className="navbar-title tx-white">InfoProg</h1>
            <div className="navbar-right">
              <img className="" src="https://avatars.githubusercontent.com/u/101493630?s=400&u=c933f26b960ac32c98a88c147b27ea77accb39a0&v=4" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Create;
