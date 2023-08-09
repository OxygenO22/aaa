import s from './SectionDescription.module.scss';
import { FC } from 'react';
import { useIntl } from "react-intl";

interface ISectionDescription {
  componentData: IData[];
}

interface IData {
  id: number;
  mainTitle: string;
  mainDescription: string;
}

export const SectionDescription: FC<ISectionDescription> = ({componentData}) => {
  const intl = useIntl();
  return (
    <div className={s.description__wrapper}>
      {componentData.map((data: IData) => (
        <div className={s.description__inner} key={data.id}>
          <div className={s.description__title_wrapper}>
            <h1 className={s.description__title}>{intl.formatMessage({id: `${data.mainTitle}`})}</h1>
          </div>
          <div className={s.description__text_wrapper}>
            <p className={s.description__text}>
              {intl.formatMessage({id: `${data.mainDescription}`})}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
