import { useParams } from "react-router-dom";
import { SinglePage } from "../../../ui/singlePage/SinglePage";
import { MoviesData } from "../MoviesData";

export const MoviesSinglePage = () => {
  const { id } = useParams();
  return <SinglePage componentData={MoviesData} id={id} />;
};
