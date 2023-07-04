import { FC } from 'react';
import { JumpButton } from '../buttons/jumpButton/JumpButton';
import st from './SinglePage.module.scss';

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
  alt: string;
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
            <div className={st.singlepage__inner}>
              <h3 className={st.singlepage__title}>{data.title}</h3>
              <div className={st.singlepage__picture}>
                <img
                  className={st.singlepage__img}
                  src={data.src}
                  alt={data.alt}
                />
              </div>
              <div className={st.singlepage__content}>
                <p className={st.singlepage__text}>{data.text}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};
