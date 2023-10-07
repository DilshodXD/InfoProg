import { Link } from "react-router-dom";
import './component.scss'

function NavBtn(props) {
  return (
    <>
      <li>
        <Link className="navBtn" to={props?.link}>{props.children}</Link>
      </li>
    </>
  );
}

export default NavBtn;