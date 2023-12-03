import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";

import UserNavbar from "./components/User/UserNavbar";
import User from "./components/User/User";

import HomeNavbar from "./components/Home/components/homeNavbar";
import HomePage from "./components/Home/HomePage";
import UserPosts from "./components/User/components/userPosts";
import UserAbout from "./components/User/components/userAbout";
import UserSaved from "./components/User/components/UserSaved";
import UserSettings from "./components/User/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeNavbar />}>
            <Route index element={<HomePage />} />
          </Route>

          <Route path="/user" element={<UserNavbar />}>
            <Route path={""} element={<User />}>
              <Route index element={<UserPosts />} />
              <Route path="about" element={<UserAbout />} />
              <Route path="saved" element={<UserSaved />} />
            </Route>
            <Route path="settings" element={<UserSettings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
