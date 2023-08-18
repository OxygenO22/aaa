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

export const Router = () => {
  const { languageCode } = useTypedSelector((state) => state.changeLang);
  const messages = TranslationHelpers.getLanguageMessages(languageCode);

  return (
    <IntlProvider locale={languageCode} messages={messages}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} path="/">
            {/* <Route element={<Popular />}  />
            <Route element={<PopularSinglePage />} path="/:id" /> */}
            <Route element={<Movies />} index/>
            <Route element={<MoviesSinglePage />} path="/:id" />
            <Route element={<Music />} path="/music" />
            <Route element={<MusicSinglePage />} path="/music/:id" />

            <Route
              element={
                <div>
                  <h1>Page not found</h1>
                </div>
              }
              path="*"
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  );
};
