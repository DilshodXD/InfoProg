import "./homeComponents.scss";

import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-navbar">
        <div className="container-xxl">
          <div className="home-navbar-inner">
            <h1 className="home-navbar-title tx-white">InfoProg</h1>
            <div className="home-navbar-right">
              <button className="home-navbar-button tx-white">
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

export default Home;
