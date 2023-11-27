import { Outlet, Link } from "react-router-dom";
import React from "react";
import TopButtun from "./upButton";
import DownButton from "./downButton";

import "./needful.scss";

function Post({
  user,
  userImg,
  userName,
  title,
  text,
  isPublic,
  postImg,
  postPath,
}) {
  return (
    <>
      <Link to={`/p/${postPath}`}>
        <div className="post d-flex jcsb bor-white rad-20">
          <div className="post-left  d-flex column jcsb">
            <div className="post-left-top">
              <Link to={"/" + user}>
                <div className="post-author d-flex aic">
                  <img
                    width={30}
                    height={30}
                    className="post-author-img bor-white"
                    src={userImg}
                    alt=""
                  />
                  <p className="post-author-name tx-white">{userName}</p>
                </div>
              </Link>
              <div className="post-text">
                <p className="post-text-title tx-white">{title}</p>
                <p className="post-text-text tx-white d-flex">
                  {text.slice(" ")[0] > 83
                    ? text.slice(0, 80) + "..."
                    : text.length > 242
                    ? text.slice(0, 242) + "..."
                    : text}
                </p>
                {/* <p className="post-text-text tx-white">{text}</p> */}
              </div>
            </div>

            <div className="post-bottom d-flex aic">
              <div className="post-lock d-flex aic">
                <p className="post-lock-text">
                  {isPublic ? "Barcha" : "Obunachilar"} uchun
                </p>
                <i
                  className={`fa-regular ${
                    isPublic ? "fa-lock-open" : "fa-lock"
                  } fa-xs`}
                  style={{ color: "#ffffff" }}
                ></i>
              </div>

              <Link to={``}>
                <div className="post-reaction d-flex aic">
                  <TopButtun postId={postPath}>
                    <i
                      id={"up" + postPath}
                      className="reaction-font fa-thin fa-lg fa-up"
                      style={{ color: "#ffffff" }}
                    ></i>
                    <p
                      className="tx-white"
                      style={{
                        fontWeight: 400,
                        fontSize: 12,
                        marginLeft: "22px",
                      }}
                    >
                      153
                    </p>
                  </TopButtun>

                  <DownButton postId={postPath}>
                    <i
                      id={"down" + postPath}
                      className="reaction-font fa-thin fa-lg fa-down"
                      style={{ color: "#ffffff" }}
                    ></i>
                    <p
                      className="tx-white"
                      style={{
                        fontWeight: 400,
                        fontSize: 12,
                        marginLeft: "22px",
                      }}
                    ></p>
                  </DownButton>
                </div>
              </Link>
            </div>
          </div>
          <img
            width={350}
            height={200}
            className="post-right-img"
            src={postImg}
            alt=""
          />
        </div>
      </Link>
    </>
  );
}

export default Post;

