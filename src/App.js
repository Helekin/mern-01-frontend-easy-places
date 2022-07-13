import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Navigate replace to="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
