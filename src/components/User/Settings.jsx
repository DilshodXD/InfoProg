import { useImmer } from "use-immer";

function UserSettings() {
  const [settings, setSettings] = useImmer({
    name: "",
    userName: "",
    bio: "",
    github: "",
    linked: "",
    x: "",
    telegram: "",
    youtube: "",
    web: "",
  });

  return (
    <div className="user">
      <div className="container-xl">
        <h1 className="settings-title tx-white">Sozlamalar</h1>
        <div className="settings">
          <div className="settings-user">
            <div className="settings-user-img">
              <label htmlFor="file-input" className="settings-user-img-label pointer">
                <p className="tx-white settings-user-img-text bor-white d-flex jcc aic">
                  Rasm yuklash
                </p>
              </label>
              <input
                className="settings-input settings-user-img-input"
                id="file-input"
                type="file"
              />
            </div>
            <div className="settings-user-name">
              <input
                className="settings-input"
                type="text"
                value={settings.name}
                placeholder="Ismingiz"
                onChange={(e) =>
                  setSettings((draft) => {
                    draft.name = e.target.value;
                  })
                }
              />
            </div>
            <div className="settings-user-bio">
              <input
                className="settings-input"
                type="text"
                value={settings.userName}
                placeholder="Foydalanuvchi ismi"
                onChange={(e) =>
                  setSettings((draft) => {
                    draft.userName = e.target.value;
                  })
                }
              />
            </div>
            <div className="settings-user-bio">
              <input
                className="settings-input"
                type="text"
                value={settings.bio}
                placeholder="Men haqimda / Bio"
                onChange={(e) =>
                  setSettings((draft) => {
                    draft.bio = e.target.value;
                  })
                }
              />
            </div>
          </div>
          <hr />
          <div className="settings-social d-flex column">
            <div className="settings-social-inner">
              <i
                style={{ color: "#1c1c1c" }}
                className="light-white fa-brands fa-linkedin fa-2xl"
              ></i>
              <input
                className="settings-input"
                type="text"
                value={settings.linked}
                placeholder="Linked In user name"
                onChange={(e) =>
                  setSettings((draft) => {
                    draft.linked = e.target.value;
                  })
                }
              />
            </div>
            <div className="settings-social-inner">
              <i
                style={{ color: "#1c1c1c" }}
                className="light-white fa-brands fa-github fa-2xl"
              ></i>
              <input
                className="settings-input"
                type="text"
                value={settings.github}
                placeholder="GitHub user name"
                onChange={(e) =>
                  setSettings((draft) => {
                    draft.github = e.target.value;
                  })
                }
              />
            </div>
            <div className="settings-social-inner">
              <i
                style={{ color: "#1c1c1c" }}
                className="fa-brands light-white fa-square-x-twitter  fa-2xl"
              ></i>
              <input
                className="settings-input"
                type="text"
                value={settings.x}
                placeholder="X/Twitter user name"
                onChange={(e) =>
                  setSettings((draft) => {
                    draft.x = e.target.value;
                  })
                }
              />
            </div>
            <div className="settings-social-inner">
              <i
                style={{ color: "#1c1c1c" }}
                className="light-white fa-brands fa-telegram  fa-2xl"
              ></i>
              <input
                className="settings-input"
                type="text"
                value={settings.telegram}
                placeholder="Telegram user name"
                onChange={(e) =>
                  setSettings((draft) => {
                    draft.telegram = e.target.value;
                  })
                }
              />
            </div>
            <div className="settings-social-inner">
              <i
                style={{ color: "#1c1c1c" }}
                className="light-white fa-brands fa-youtube fa-2xl"
              ></i>
              <input
                className="settings-input"
                type="text"
                value={settings.youtube}
                placeholder="YouTube user name"
                onChange={(e) =>
                  setSettings((draft) => {
                    draft.youtube = e.target.value;
                  })
                }
              />
            </div>
            <div className="settings-social-inner">
              <i
                style={{ color: "#1c1c1c" }}
                className="light-white fa-regular fa-globe fa-2xl"
              ></i>
              <input
                className="settings-input"
                type="text"
                value={settings.web}
                placeholder="Web user name"
                onChange={(e) =>
                  setSettings((draft) => {
                    draft.web = e.target.value;
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="settings-submit bor-white rad-10 tx-white bg-green pointer">Saqlash</div>
      </div>
    </div>
  );
}

export default UserSettings;
