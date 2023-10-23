import "../homeComponents.scss";

import { Outlet, Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <>
      <div className="navbar">
        <div className="container-xxl">
          <div className="navbar-inner">
            <h1 className="navbar-title tx-white">InfoProg</h1>
            <div className="navbar-right">
              <button className="navbar-button tx-white">
                <Link to="singup">Kirish</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default HomeNavbar;
