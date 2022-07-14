import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Users from "./users/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";

import MainNavigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
