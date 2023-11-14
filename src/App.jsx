import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";

import UserNavbar from "./components/User/UserNavbar";
import User from "./components/User/User";

import HomeNavbar from "./components/Home/components/homeNavbar";
import HomePage from "./components/Home/HomePage";
import UserPosts from "./components/User/components/userPosts";
import UserAbout from "./components/User/components/userAbout";
import UserSettings from "./components/User/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Route index (home) page */}
          <Route path="/" element={<HomeNavbar />}>
            <Route index element={<HomePage />} />
          </Route>

          <Route path="/user" element={<UserNavbar />}>

            <Route path={""} element={<User />}>
              <Route index element={<UserPosts />} />
              <Route path="about" element={<UserAbout />} />
              <Route path="saved" element={<p className="tx-white">Saved</p>} />
              <Route
                path="answers"
                element={<p className="tx-white">Javoblar</p>}
              />

            <Route path={''} element={<User />}>
              <Route index element={<UserPosts/>} />
              <Route path="about" element={<UserAbout/>} />
              <Route path="saved" element={<p className="tx-white">Saved</p>} /> 
              <Route path="answers" element={<p className="tx-white">Javoblar</p>} /> 

            </Route>
            <Route path="settings" element={<UserSettings/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
