import { useState } from "react";
import { useImmer } from "use-immer";

function UserSettings() {
  const [settings, setSettings] = useImmer({
    name: "",
    bip: "",
    github: "",
    linked: "",
    x: "",
    telegram: "",
    youtube: "",
    web: "",
  });
  console.log(settings);
  return (
    <div className="user">
      <div className="container-xl">
        <h1 className="settings-title tx-white">Sozlamalar</h1>
        <div className="settings">
          <div className="tx-white settings-user">
            <div className="settings-user-img">
              <input className="settings-input" type="file" />
            </div>
            <div className="settings-user-name">
              <input
                className="settings-input"
                type="text"
                value={settings.name}
                placeholder="Ismingizni kiriting"
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
                value={settings.bio}
                placeholder="Men haqingizda"
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
                className="tx-light fa-brands fa-linkedin fa-2xl"
              ></i>
              <input
                className="settings-input"
                type="text"
                value={settings.linked}
                placeholder="Linked In"
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
                className="tx-light fa-brands fa-github fa-2xl"
              ></i>
              <input
                className="settings-input"
                type="text"
                value={settings.github}
                placeholder="GitHub"
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
                className="fa-brands tx-light fa-square-x-twitter  fa-2xl"
              ></i>
              <input
                className="settings-input"
                type="text"
                value={settings.x}
                placeholder="X/Twitter"
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
                className="tx-light fa-brands fa-telegram  fa-2xl"
              ></i>
              <input
                className="settings-input"
                type="text"
                value={settings.telegram}
                placeholder="Telegram"
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
                className="tx-light fa-brands fa-youtube fa-2xl"
              ></i>
              <input
                className="settings-input"
                type="text"
                value={settings.youtube}
                placeholder="YouTube"
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
                className="tx-light fa-regular fa-globe fa-2xl"
              ></i>
              <input
                className="settings-input"
                type="text"
                value={settings.web}
                placeholder="Web"
                onChange={(e) =>
                  setSettings((draft) => {
                    draft.web = e.target.value;
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
