import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Music } from "../pages/music/Music";
import { Layout } from "../pages/Layout";
import { Movies } from "../pages/movies/Movies";
/* import { Popular } from "../pages/popular/Popular";
import { PopularSinglePage } from "../pages/popular/popularSinglePage/PopularSinglePage"; */
import { MusicSinglePage } from "../pages/music/musicSinglePage/MusicSinglePage";
import { MoviesSinglePage } from "../pages/movies/moviesSinglePage/MoviesSinglePage";
import { IntlProvider } from "react-intl";
import TranslationHelpers from "../../translations/translationHelpers";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { NotFoundPage } from "../pages/notFoundPage/NotFoundPage";

export const Router = () => {
  const { languageCode } = useTypedSelector((state) => state.changeLang);
  const messages = TranslationHelpers.getLanguageMessages(languageCode);

  return (
    <IntlProvider locale={languageCode} messages={messages}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path="/aaa/">
            {/* <Route element={<Popular />}  />
            <Route element={<PopularSinglePage />} path="/:id" /> */}
            <Route element={<Movies />} index/>
            <Route element={<MoviesSinglePage />} path="/aaa/:id" />
            <Route element={<Music />} path="/aaa/music" />
            <Route element={<MusicSinglePage />} path="/aaa/music/:id" />
            <Route element={<NotFoundPage />} path="*"/>
          </Route>
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
};
