import { RouteButton } from "../buttons/RouteButton";

export const HomeMenu = () => {
  return (
    <>
      <RouteButton path="/aaa/" name="Home" />
      <RouteButton path="Popular" name="Popular" />
      <RouteButton path="Music" name="Music" />
      <RouteButton path="Movies" name="Movies" />
    </>
  );
};
