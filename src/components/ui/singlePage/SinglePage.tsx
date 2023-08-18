import { FC } from 'react';
import { JumpButton } from '../buttons/jumpButton/JumpButton';
import st from './SinglePage.module.scss';
import { Link } from 'react-router-dom';
import { useIntl } from "react-intl";
import { LazyImage } from '../lazyImage/LazyImage';
import Placeholder from "../../../pictures/Logo.png";

interface ISinglePage {
  componentData: IData[];
  id: string | undefined;
}

interface IData {
  id: number;
  to: string;
  title: string;
  text: string;
  src: string;
  link?: string;
  linkName?: string;
  movies?: IMovies[];
}

interface IMovies {
  id: number;
  movie: string;
  src?: string;
  description?: string;
}

export const SinglePage: FC<ISinglePage> = ({ componentData, id }) => {
  const intl = useIntl();
  return (
    <div className={st.singlepage__wrapper}>
      <div className={st.singlepage__back_wrapper}>
        <JumpButton />
      </div>
      {componentData.map(
        (data: IData) =>
          id === data.to && (
            <div className={st.singlepage__inner} key={data.id}>
              <div className={st.singlepage__title_wrapper}>
                <h3 className={st.singlepage__title}>
                  {intl.formatMessage({ id: `${data.title}` })}
                </h3>
              </div>
              <div className={st.singlepage__content}>
                {data.movies &&
                  data.movies.map((data) => (
                    <div className={st.singlepage__content_movie} key={data.id}>
                      <div
                        className={st.singlepage__content_movie_title_wrapper}
                      >
                        <h4 className={st.singlepage__content_movie_title}>
                          {intl.formatMessage({ id: `${data.movie}` })}
                        </h4>
                      </div>
                      <div className={st.singlepage__content_inner}>
                        <div className={st.singlepage__img_wrapper}>
                          <LazyImage
                            src={data.src}
                            placeholderSrc={Placeholder}
                            alt={intl.formatMessage({ id: `${data.movie}` })}
                          />
                        </div>
                        <div className={st.singlepage__text_wrapper}>
                          {data.description ? (
                            <p className={st.singlepage__text}>
                              {intl.formatMessage({
                                id: `${data.description}`,
                              })}
                            </p>
                          ) : (
                            <p className={st.singlepage__text}>
                              {intl.formatMessage({
                                id: "app.MoviesData.NoDescription",
                              })}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                {data.text && (
                  <p className={st.singlepage__text}>
                    {intl.formatMessage({
                      id: `${data.text}`,
                    })}
                  </p>
                )}
              </div>
              <div className={st.singlepage__link_wrapper}>
                {data.link && data.linkName && (
                  <Link
                    className={st.singlepage__link}
                    to={data.link}
                    target="_blank"
                  >
                    <p className={st.singlepage__link_text}>
                      {intl.formatMessage({
                        id: `${data.linkName}`,
                      })}
                    </p>
                  </Link>
                )}
              </div>
            </div>
          )
      )}
    </div>
  );
};
