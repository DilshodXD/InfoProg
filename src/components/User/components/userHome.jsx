import { useEffect, useState } from "react";
import "../userComponents.scss";
import { Outlet, Link } from "react-router-dom";

function UserHome() {
  const [path, setPath] = useState(document.location.pathname);
  const [elem, setElem] = useState([]);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    setElem(document.querySelectorAll(".user_home-links-link"));
  }, []);


  return (
    <>
      <div className="user_home">
        <div className="user_home-top">
          <img
            className="user_home-top-img bor-white"
            src="https://i.imgur.com/RCwLEoQm.jpg"
            alt=""
          />
          <div className="user_home-info">
            <div className="user_home-top-names">
              <p className="user_home-top-name tx-white">
                Dilshod Xojimuhammedov
              </p>
              <p className="user_home-top-userName tx-white">@Xojimuhammedov</p>
            </div>

            <div className="user_home-follow">
              <div className="user_home-follow-s">
                <p className="user_home-follow-title tx-white">Obuna:</p>
                <p className="user_home-follow-number tx-white">15</p>
              </div>
              <div className="user_home-follow-s">
                <p className="user_home-follow-title tx-white">Obunachi:</p>
                <p className="user_home-follow-number tx-white">15</p>
              </div>
            </div>

            <p className="user_home-bio tx-white">
              Hi bro 👋{"\n"}
              I'm web devoloper 🌐{"\n"}
              Phone number: 998 95 044 77 24
            </p>
          </div>
        </div>

        <div className="user_home-links">
          <Link
            onClick={() => {
              setPath("/user");
              setLeft(elem[0].offsetLeft);
            }}
            to={"/user"}
          >
            <div id="elem1" className="user_home-links-link">
              <p className="user_home-links-text">Nashrlar</p>
            </div>
          </Link>
          <Link
            onClick={() => {
              setPath("/user/about");
              setLeft(elem[1].offsetLeft);
            }}
            to={"/user/about"}
          >
            <div id="elem2" className="user_home-links-link">
              <p className="user_home-links-text">Nashrlar</p>
            </div>
          </Link>
          <Link
            onClick={() => {
              setPath("/user/saved");
              setLeft(elem[2].offsetLeft)
            }}
            to={"/user/saved"}
          >
            <div id="elem3" className="user_home-links-link">
              <p className="user_home-links-text">Nashrlar</p>
            </div>
          </Link>
          <div style={{ left: left }} className="active">
            <span className="active-left"></span>
            <span className="active-right"></span>
            <span className="active-bottom"></span>
          </div>
        </div>
        <hr />
      </div>
      <Outlet />
    </>
  );
}

export default UserHome;
