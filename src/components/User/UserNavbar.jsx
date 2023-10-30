import "./userComponents.scss";
import HoverButton from "../needful/hoverButton";
import { Outlet, Link } from "react-router-dom";

const links = [
  {
    fontSize: 18,
  },
];

function UserNavbar() {
  return (
    <>
      <div className="user-navbar">
        <Link to={"/"}>
          <h1 className="user-navbar-title tx-white">InfoProg</h1>
        </Link>
        <div className="user-navbar-vertical">
        <Link to={"/user"}>
            <HoverButton color={'#fff'} fontWeight={400} fontSize={24} padding={[10, 16]}>
              Mening sahifam
            </HoverButton>
          </Link>
          <Link to={"activity"}>
            <HoverButton color={'#fff'} fontWeight={400} fontSize={24} padding={[10, 16]}>
              Faollik
            </HoverButton>
          </Link>
          <Link to={"settings"}>
            <HoverButton color={'#fff'} fontWeight={400} fontSize={24} padding={[10, 16]}>
              Sozlamalar
            </HoverButton>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default UserNavbar;
