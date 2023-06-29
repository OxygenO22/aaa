import s from './JumpButton.module.scss';
import { useNavigate } from 'react-router-dom';



export const JumpButton = () => {
  const navigate = useNavigate();
  
  const jump = () => navigate(-1);

  return (
    <div className={s.jumpbutton} onClick={jump}>
      <p >Back</p>
    </div>
  );
}
