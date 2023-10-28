import React from "react";
import "./needful.scss";

function Post({ userImg, userName, title, text, isPublic, postImg }) {
  return (
    <div className="post d-flex jcsb bor-white rad-20">
      <div className="post-left  d-flex column jcsb">
        <div className="post-left-top">
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
          <div className="post-text">
            <p className="post-text-title tx-white">
              {title}
            </p>
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
        <div className="post-lock tx-white d-flex aic">
          <p className="post-lock-text">
            {isPublic ? "Barcha" : "Obunachilar"} uchun
          </p>
          <i
            class={`fa-regular ${isPublic ? "fa-lock-open" : "fa-lock"} fa-xs`}
            style={{ color: "#ffffff" }}
          ></i>
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
  );
}

export default Post;
