import { FC } from 'react';
import { JumpButton } from '../buttons/jumpButton/JumpButton';
import st from './SinglePage.module.scss';
import { Link } from 'react-router-dom';

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
                <h3 className={st.singlepage__title}>{data.title}</h3>
              </div>
              <div className={st.singlepage__content}>
                {data.movies &&
                  data.movies.map((data) => (
                    <div className={st.singlepage__content_movie} key={data.id}>
                      <h4 className={st.singlepage__content_movie_title}>
                        {data.movie}
                      </h4>
                      <div className={st.singlepage__content_inner}>
                        <div className={st.singlepage__img_wrapper}>
                          <img
                            className={st.singlepage__img}
                            src={data.src}
                            alt={data.movie}
                          />
                        </div>
                        <div className={st.singlepage__text_wrapper}>
                          {data.description ?
                            <p className={st.singlepage__text}>{data.description}</p>
                            :
                            <p className={st.singlepage__text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates aliquid hic rem laboriosam dolores
                            ad aut vero porro, sit blanditiis quis nam numquam
                            velit, omnis eaque distinctio est rerum officia.
                            Nihil molestias accusamus facere iusto nisi
                            laboriosam atque numquam, vel sit, delectus sint
                            expedita error placeat velit aperiam! Itaque eum
                            quis nostrum deserunt, temporibus quisquam dolore
                            aliquid sint facere labore, quaerat aperiam vel ex
                            accusamus sit consequatur ut? Laboriosam animi
                            voluptatum veritatis ullam et incidunt illum
                            blanditiis hic, magnam architecto amet illo odio
                            facilis rem? Repellat ratione, vitae repudiandae ut
                            consequatur aspernatur quaerat ad deleniti, dicta
                            quo eligendi nesciunt ex?
                          </p>}
                        </div>
                      </div>
                    </div>
                  ))}
                {data.text && (
                  <p className={st.singlepage__text}>{data.text}</p>
                )}
              </div>
              <div className={st.singlepage__link_wrapper}>
                {data.link && data.linkName && (
                  <Link
                    className={st.singlepage__link}
                    to={data.link}
                    target="_blank"
                  >
                    <p className={st.singlepage__link_text}>{data.linkName}</p>
                  </Link>
                )}
              </div>
            </div>
          )
      )}
    </div>
  );
};
