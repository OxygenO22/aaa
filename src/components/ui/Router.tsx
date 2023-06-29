import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Music } from "../pages/music/Music";
import { Layout } from "../pages/Layout";
import { Movies } from "../pages/movies/Movies";
import { Popular } from "../pages/popular/Popular";
import { PopularSinglePage } from "../pages/popular/popularSinglePage/PopularSinglePage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} index />
          <Route element={<Popular />} path="Popular" />
          <Route element={<PopularSinglePage />} path="Popular/:id" />
          <Route element={<Music />} path="Music" />
          <Route element={<Movies />} path="Movies" />
          <Route element={<div>Not found</div>} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
