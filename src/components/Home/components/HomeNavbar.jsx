import "../homeComponents.scss";
import HoverButton from "../../needful/hoverButton";

import { Outlet, Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <>
      <div className="navbar">
        <div className="container-xxl">
          <div className="navbar-inner">
            <h1 className="navbar-title tx-white">InfoProg</h1>
            <div className="navbar-right">
              <HoverButton
                className="rad-10"
                fontWeight={400}
                fontSize={18}
                padding={[5, 15]}
              >
                <Link to="login">Kirish</Link>
              </HoverButton>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default HomeNavbar;
