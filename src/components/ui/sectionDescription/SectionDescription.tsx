import st from './SectionDescription.module.scss';
import { FC } from 'react';

interface ISectionDescription {
  componentData: IData[];
}

interface IData {
  id: number;
  mainTitle: string;
  mainDescription: string;
}

export const SectionDescription: FC<ISectionDescription> = ({componentData}) => {
  return (
    <div className={st.description__wrapper}>
      {componentData.map((data: IData) => (
        <div className={st.description__inner} key={data.id}>
          <div className={st.description__title_wrapper}>
            <h1 className={st.description__title}>{data.mainTitle}</h1>
          </div>
          <div className={st.description__text_wrapper}>
            <p className={st.description__text}>
              {data.mainDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
