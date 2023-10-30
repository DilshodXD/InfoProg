import { useEffect, useState } from "react";
import "./userComponents.scss";
import { Outlet, Link } from "react-router-dom";

function User() {
  const [path, setPath] = useState(document.location.pathname);
  const [elem, setElem] = useState([]);
  const [left, setLeft] = useState();

  useEffect(() => {
    setElem(document.querySelectorAll(".user-links-link"));
    setLeft(document.getElementById(path).offsetLeft);
  }, []);

  return (
    <>
      <div className="user bg-black">
        <div className="user-top container-lg">
          <img
            width={150}
            height={150}
            className="user-top-img bor-white"
            src="https://avatars.githubusercontent.com/u/101493630?s=400&u=c933f26b960ac32c98a88c147b27ea77accb39a0&v=4"
            alt=""
          />
          <div className="user-info">
            <div className="user-top-names">
              <p className="user-top-name tx-white">Dilshod Xojimuhammedov</p>
              <p className="user-top-userName tx-white">@Xojimuhammedov</p>
            </div>

            <div className="user-follow">
              <div className="user-follow-s">
                <p className="user-follow-title tx-white">Obuna:</p>
                <p className="user-follow-number tx-white">15</p>
              </div>
              <div className="user-follow-s">
                <p className="user-follow-title tx-white">Obunachi:</p>
                <p className="user-follow-number tx-white">15</p>
              </div>
            </div>

            <p className="user-bio tx-white">
              Hi bro 👋{"\n"}
              I'm web devoloper 🌐{"\n"}
              Phone number: 998 95 044 77 24
            </p>
          </div>
        </div>

        <div className="user-links">
          <Link
            onClick={() => {
              setPath(path);
              setLeft(elem[0].offsetLeft);
            }}
            to={"/user"}
          >
            <div id={"/user"} className="user-links-link">
              <p className="user-links-text">Nashrlar</p>
            </div>
          </Link>
          <Link
            onClick={() => {
              setPath(path);
              setLeft(elem[1].offsetLeft);
            }}
            to={"/user/about"}
          >
            <div id={"/user/about"} className="user-links-link">
              <p className="user-links-text">Men haqimda</p>
            </div>
          </Link>
          <Link
            onClick={() => {
              setPath(path);
              setLeft(elem[2].offsetLeft);
            }}
            to={"/user/saved"}
          >
            <div id={"/user/saved"} className="user-links-link">
              <p className="user-links-text">Saqlanganlar</p>
            </div>
          </Link>
          <Link
            onClick={() => {
              setPath(path);
              setLeft(elem[3].offsetLeft);
            }}
            to={"/user/answers"}
          >
            <div id={"/user/answers"} className="user-links-link">
              <p className="user-links-text">Javoblar</p>
            </div>
          </Link>
          <div style={{ left: left }} className="active">
            <span className="active-left"></span>
            <span className="active-right"></span>
            <span className="active-bottom"></span>
          </div>
        </div>
        <hr />
        <Outlet />
      </div>
    </>
  );
}

export default User;
