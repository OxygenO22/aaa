import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Music } from "../pages/music/Music";
import { Layout } from "../pages/Layout";
import { Movies } from "../pages/movies/Movies";
import { Popular } from "../pages/popular/Popular";
import { PopularSinglePage } from "../pages/popular/popularSinglePage/PopularSinglePage";
import { MusicSinglePage } from "../pages/music/musicSinglePage/MusicSinglePage";
import { MoviesSinglePage } from "../pages/movies/moviesSinglePage/MoviesSinglePage";
import { IntlProvider } from "react-intl";
import TranslationHelpers from "../../translations/translationHelpers";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const Router = () => {
  const { languageCode } = useTypedSelector((state) => state.changeLang);
  const messages = TranslationHelpers.getLanguageMessages(languageCode);

  return (
    <IntlProvider locale={languageCode} messages={messages}>
      <BrowserRouter>
        <Routes>
          <Route
            element={<Layout /* onLanguageSwitch={setLanguageCode} */ />}
            path="/aaa/"
          >
            <Route element={<Home />} index />
            <Route element={<Popular />} path="Popular" />
            <Route element={<PopularSinglePage />} path="Popular/:id" />
            <Route element={<Music />} path="Music" />
            <Route element={<MusicSinglePage />} path="Music/:id" />
            <Route element={<Movies />} path="Movies" />
            <Route element={<MoviesSinglePage />} path="Movies/:id" />
            <Route element={<div>Not found</div>} path="*" />
          </Route>
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
};
