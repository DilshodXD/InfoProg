import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";

import UserNavbar from "./components/User/UserNavbar";
import User from "./components/User/User";

import HomeNavbar from "./components/Home/components/homeNavbar";
import HomePage from "./components/Home/HomePage";
import UserPosts from "./components/User/components/userPosts";
import UserAbout from "./components/User/components/userAbout";
import UserSaved from "./components/User/components/userSaved";
import UserSettings from "./components/User/Settings";
import LogIn from "./components/logIn/login";
import Create from "./components/create/create";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeNavbar />}> {/* HOME PAGE */}
            <Route index element={<HomePage />} />
          </Route>

          <Route path="/user" element={<UserNavbar />}> {/* USER PAGE */}
            <Route path={""} element={<User />}>
              <Route index element={<UserPosts />} />
              <Route path="about" element={<UserAbout />} />
              <Route path="saved" element={<UserSaved />} />
            </Route>
            <Route path="settings" element={<UserSettings />} />
          </Route>

          <Route path="/login" element={<LogIn />} />  {/* lOGIN PAGE */}
          
          <Route path="/create" element={<Create />} />  {/* ARTICLE CREATE PAGE */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
