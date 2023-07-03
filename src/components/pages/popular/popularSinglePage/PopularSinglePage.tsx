import st from './PopularSinglePage.module.scss';
import { PopularData } from '../PopularData';
import { useParams } from 'react-router-dom';
import { JumpButton } from '../../../ui/buttons/jumpButton/JumpButton';

export const PopularSinglePage = () => {
  const {id} = useParams();

  return (
    <div className={st.singlepage__wrapper}>
      <div className={st.singlepage__back_wrapper}>
        <JumpButton />
      </div>
      {PopularData.map(
        (data) =>
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
}
