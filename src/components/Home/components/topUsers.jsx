import { Link } from "react-router-dom";

const users = [
  {
    id: 1,
    user: "Xojimuhammedov",
    bio: "DilshodXojimuhammedovInternFrontendDeveloper",
    imageId: "https://i.imgur.com/MK3eW3As.jpg",
    twitter: "xojimuhammedov",
    linkedIn: "xojimuhammedov",
    github: "xojimuhammdov",
    web: "https://portfolio-xd.netlify.app/",
  },
  {
    id: 2,
    user: "Farkhod",
    bio: "Software Engineer | LeetCode 640+ | Java | JavaScript | React | Angular | Vue | TypeScript | Python",
    imageId: "https://i.imgur.com/mynHUSas.jpg",
    twitter: "",
    linkedIn: "farkhod",
    github: "farkhod",
    web: "",
  },
  {
    id: 3,
    user: "Ahmad",
    bio: "Software Engineer | LeetCode 640+ | Java | JavaScript | React | Angular | Vue | TypeScript | Python",
    imageId: "https://i.imgur.com/bE7W1jis.jpg",
    twitter: "",
    linkedIn: "ahmad",
    github: "ahmad",
    web: "",
  },
  {
    id: 4,
    user: "Dilshod",
    bio: "Software Engineer | LeetCode 640+ | Java | JavaScript | React | Angular | Vue | TypeScript | Python",
    imageId: "https://i.imgur.com/MK3eW3As.jpg",
    twitter: "dilshod",
    linkedIn: "dilshod",
    github: "Dilshod",
    web: "",
  },
  {
    id: 5,
    user: "Obidjon",
    bio: "Software Engineer | LeetCode 640+ | Java | JavaScript | React | Angular | Vue | TypeScript | Python",
    imageId: "https://i.imgur.com/IOjWm71s.jpg",
    twitter: "obidjon-narzullaev",
    linkedIn: "obidjon",
    github: "obidjon",
    web: "",
  },
];

function TopUsers() {
  return (
    <section className="users bg-black">
      <div className="container-xl">
        <h1 className="users-title tx-white">Obuna bo'ling</h1>
        <div className="users-inner">
          {users.map((user) => (
            <div key={user.id} className="users-user rad-20 bor-white">
              <div className="users-user-top">
                <div to={user.user} className="users-user-img_title">
                  <Link to={user.user}>
                    <img
                      className="users-user-img bor-white"
                      src={user.imageId}
                      alt=""
                    />
                  </Link>
                  <Link to={user.user} className="users-user-name tx-white">
                    {user.user.length > 17
                      ? user.user.slice(0, 16) + ".."
                      : user.user}
                  </Link>
                </div>
                <button className="users-user-follow bor-white tx-white bg-black rad-10">
                  obuna
                </button>
              </div>
              <p className="users-user-bio tx-white">
                {user.bio.split(" ")[0].length > 35
                  ? user.bio.slice(0, 34) + "..."
                  : user.bio}
              </p>
              <div className="users-user-social">
                {user.github ? (
                  <a href={"https://github.com/" + user.github}>
                    <i className="fa-brands fa-square-github fa-xl"></i>
                  </a>
                ) : null}
                {user.twitter ? (
                  <a href={"https://twitter.com/" + user.twitter}>
                    <i className="fa-brands fa-square-x-twitter fa-xl"></i>
                  </a>
                ) : null}
                {user.linkedIn ? (
                  <a href={"https://www.linkedin.com/in/" + user.linkedIn}>
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                  </a>
                ) : null}
                {user.web ? (
                  <a href={user.web}>
                    <i className="fa-regular fa-globe fa-xl"></i>
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopUsers;
