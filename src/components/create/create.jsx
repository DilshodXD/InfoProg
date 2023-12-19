import { useState } from "react";
import { Link } from "react-router-dom";

import "./create.scss";

function Create() {
  const [article, setArticle] = useState({
    title: "",
    text: "",
  });

  console.log(article);

  const tx = document.getElementsByTagName("textarea");
  for (let i = 0; i < tx.length; i++) {
    tx[i].setAttribute(
      "style",
      "height:" + tx[i].scrollHeight + "px;overflow: hidden;"
    );
    tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput() {
    this.style.height = 0;
    this.style.height = this.scrollHeight + "px";
  }

  return (
    <div className="create bg-black">
      <div className="navbar">
        <div className="container-xl">
          <div className="navbar-inner">
            <Link to="/">
              <h1 className="navbar-title tx-white">InfoProg</h1>
            </Link>
            <img
              className="navbar-link-img rad-15"
              src="https://avatars.githubusercontent.com/u/101493630?s=400&u=c933f26b960ac32c98a88c147b27ea77accb39a0&v=4"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="create-article container-lg tx-white">
        <textarea
          onChange={(e) => setArticle({ ...article, title: e.target.value })}
          value={article.title}
          className="create-title tx-white"
          placeholder="Sarlavha"
          type="text"
        />
        <textarea
          onChange={(e) => setArticle({ ...article, text: e.target.value })}
          value={article.text}
          className="create-text tx-white"
          placeholder="Matn"
          type="text"
        />
      </div>
    </div>
  );
}

export default Create;
