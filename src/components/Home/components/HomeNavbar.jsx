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
              <ul className="d-flex">
                <li>
                  <Link to="create">
                    <div className="navbar-link">
                      <i
                        class="fa-light fa-pen-to-square fa-xl"
                        style={{ color: "#fff" }}
                      ></i>
                    </div>
                  </Link>
                </li>
              </ul>

              {true ? (
                <Link to="login">
                  <div className="navbar-login">
                    <HoverButton
                      className="rad-10"
                      fontWeight={400}
                      fontSize={18}
                      padding={[5, 15]}
                      color={"#fff"}
                    >
                      Kirish
                    </HoverButton>
                  </div>
                </Link>
              ) : (
                <Link to="user">
                  <div className="navbar-login">
                    <img
                      className="navbar-link-img rad-15"
                      src="https://avatars.githubusercontent.com/u/101493630?s=400&u=c933f26b960ac32c98a88c147b27ea77accb39a0&v=4"
                      alt=""
                    />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default HomeNavbar;
