import st from './PopularSinglePage.module.scss';
import { PopularData } from '../PopularData';
import { useParams } from 'react-router-dom';
import { JumpButton } from '../../../ui/buttons/jumpButton/JumpButton';

export const PopularSinglePage = () => {
  const {id} = useParams();

  return (
    <div className={st.singlepage__wrapper}>
      <JumpButton />
      {PopularData.map(
        (data) =>
           id === data.to && (
            <div >
              <h3>{data.title}</h3>
              <p>{data.text}</p>
            </div>
          )
      )}
    </div>
  );
}
