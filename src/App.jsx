import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";

import UserNavbar from "./components/User/UserNavbar";
import User from "./components/User/User";

import HomeNavbar from "./components/Home/components/homeNavbar";
import HomePage from "./components/Home/HomePage";

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
            <Route index element={<User />} />
            <Route path="saved" element={<User />} />
            <Route path="about" element={<User />} />
          </Route>

          {/* Route singup / singin page */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
