import HoverButton from "../../needful/hoverButton";

const socials = {
  linked: "https://www.linkedin.com/in/xojimuhammedov/",
  github: "https://github.com/DilshodXD",
  x: "https://twitter.com/xojimuhammedov",
  telegram: "https://t.me/Dilshodxd",
  youtube: "https://www.youtube.com/@xojimuhammedov",
  web: "https://xojimuhammedov.netlify.app/",
};

function UserAbout() {
  return (
    <div className="container-lg">
      <div className="user_aobut">
        <div className="user_aobut-bio">
          <p className="user_aobut-bio-text tx-white">
            <span className="user_aobut-bio-title">Men: </span>
            Mening ismim Dilshod Xojimuhammedov. 2004 - yil 16 - dekabrda chinoz
            tumanida tavallud topganman. Dasturlashni 2021-yilda Proweb o'quv
            markazida boshlaganman.
          </p>
        </div>
        
        <div className="user_aobut-social d-flex column">
          {socials.linked ? (
            <HoverButton padding={[5, 12]}>
              <a href={socials.linked} className="user_aobut-social-inner">
                <i
                  style={{ color: "#1c1c1c" }}
                  className="fa-brands fa-linkedin fa-2xl"
                ></i>
                <p className="user_aobut-social-name tx-white">
                  Xojimuhammedov
                </p>
              </a>
            </HoverButton>
          ) : undefined}
          {socials.github ? (
            <HoverButton padding={[5, 12]}>
              <a href={socials.github} className="user_aobut-social-inner">
                <i
                  style={{ color: "#1c1c1c" }}
                  className="fa-brands fa-github fa-2xl"
                ></i>
                <p className="user_aobut-social-name tx-white">DilshodXD</p>
              </a>
            </HoverButton>
          ) : undefined}

          {socials.x ? (
            <HoverButton padding={[5, 12]}>
              <a href={socials.x} className="user_aobut-social-inner">
                <i
                  style={{ color: "#1c1c1c" }}
                  className="fa-brands fa-square-x-twitter fa-2xl"
                ></i>
                <p className="user_aobut-social-name tx-white">
                  Xojimuhammedov
                </p>
              </a>
            </HoverButton>
          ) : undefined}

          {socials.telegram ? (
            <HoverButton padding={[5, 12]}>
              <a href={socials.telegram} className="user_aobut-social-inner">
                <i
                  style={{ color: "#1c1c1c" }}
                  className="fa-brands fa-telegram fa-2xl"
                ></i>
                <p className="user_aobut-social-name tx-white">DilshodXD</p>
              </a>
            </HoverButton>
          ) : undefined}

          {socials.youtube ? (
            <HoverButton padding={[5, 12]}>
              <a href={socials.youtube} className="user_aobut-social-inner">
                <i
                  style={{ color: "#1c1c1c" }}
                  className="fa-brands fa-youtube fa-2xl"
                ></i>
                <p className="user_aobut-social-name tx-white">
                  Xojimuhammedov
                </p>
              </a>
            </HoverButton>
          ) : undefined}

          {socials.web ? (
            <HoverButton padding={[5, 12]}>
              <a href={socials.web} className="user_aobut-social-inner">
                <i
                  style={{ color: "#1c1c1c" }}
                  className="fa-regular fa-globe fa-2xl"
                ></i>
                <p className="user_aobut-social-name tx-white">
                  Xojimuhammedov
                </p>
              </a>
            </HoverButton>
          ) : undefined}
        </div>
      </div>
    </div>
  );
}
export default UserAbout;