import { PopularMainData } from "../../pages/popular/PopularData";
import st from './SectionDescription.module.scss'

export const SectionDescription = () => {
  return (
    <>
      {PopularMainData.map((data) => (
        <div className={st.popular__description_inner} key={data.id}>
          <div className={st.popular__description_title_wrapper}>
            <h1 className={st.popular__description_title}>{data.mainTitle}</h1>
          </div>
          <div className={st.popular__description_text_wrapper}>
            <p className={st.popular__description_text}>
              {data.mainDescription}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
