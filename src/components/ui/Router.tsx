import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Music } from "../pages/music/Music";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Music />} path="/Music" />
        <Route element={<div>Not found</div>} path="*" />
      </Routes>
    </BrowserRouter>
  );
};
