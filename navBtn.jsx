import { Link } from "react-router-dom";
import './component.scss'

function Ul(props) {
  return (
    <>
      <li>
        <Link className="navBtn" to={props?.link}>{props.children}</Link>
      </li>
    </>
  );
}

export default Ul;
