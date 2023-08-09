import s from './JumpButton.module.scss';
import { useNavigate } from 'react-router-dom';
import { useIntl } from "react-intl";



export const JumpButton = () => {
  const navigate = useNavigate();
  const intl = useIntl();
  
  const jump = () => navigate(-1);

  return (
    <div className={s.jumpbutton} onClick={jump}>
      <p>{intl.formatMessage({id: 'app.button.back'})}</p>
    </div>
  );
}
