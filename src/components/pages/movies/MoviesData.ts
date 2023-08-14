import Space from '../../../pictures/movies/Space.jpg';
import RussianSeries from '../../../pictures/movies/RussianSeries.jpg';
import Thrillers from '../../../pictures/movies/Thrillers.jpg';
import Romantical from '../../../pictures/movies/Romantical.jpg';
import Horrors from '../../../pictures/movies/Horrors.jpg';
import Catastrophes from '../../../pictures/movies/Catastrophies.jpg';
import ForCompany from '../../../pictures/movies/ForCompany.jpg';
import ForFamaly from '../../../pictures/movies/ForFamaly.jpg';
import Comedies from '../../../pictures/movies/Comedies.jpg';
import ForeignSeries from '../../../pictures/movies/ForeignSeries.jpg';

import TheParentTrap from '../../../pictures/movies/withKids/TheParentTrap.webp';
import Matilda from '../../../pictures/movies/withKids/Matilda.webp';
import Doubtfire from '../../../pictures/movies/withKids/Doubtfire.webp';
import Wonder from '../../../pictures/movies/withKids/Wonder.webp';
import StuartLittle from '../../../pictures/movies/withKids/StuartLittle.webp';

import WeAreYourFriends from '../../../pictures/movies/yoursFilms/WeAreYourFriends.webp';
import SeventinthAgain from '../../../pictures/movies/yoursFilms/SeventinthAgain.webp';
import MeanGirls from '../../../pictures/movies/yoursFilms/MeanGirls.webp';

import Grendlandia from '../../../pictures/movies/catastrophe/Grendlandia.jpg';
import twoThousandTwelve from '../../../pictures/movies/catastrophe/2012.jpg';
import SanAndreas from '../../../pictures/movies/catastrophe/San-Andreas.jpg';
import Wave from '../../../pictures/movies/catastrophe/Wave.jpg';
import Fault from '../../../pictures/movies/catastrophe/Fault.jpg';
import Monstro from '../../../pictures/movies/catastrophe/Monstro.jpg';
import Brigada from '../../../pictures/movies/russianSeries/Brigada.jpg';
import Pirogova from '../../../pictures/movies/russianSeries/Pirogova.jpg';
import Bivshie from '../../../pictures/movies/russianSeries/Bivshie.jpg';
import CallCenter from '../../../pictures/movies/russianSeries/CallCenter.jpg';
import FamilyWar from '../../../pictures/movies/russianSeries/FamilyWar.jpg';
import Kitchen from '../../../pictures/movies/russianSeries/Kitchen.jpg';
import Konteiner from '../../../pictures/movies/russianSeries/Konteiner.jpg';
import UsualWoman from '../../../pictures/movies/russianSeries/UsualWoman.jpg';
import SugarLife from '../../../pictures/movies/russianSeries/SugarLife.jpg';
import Anxious from '../../../pictures/movies/russianSeries/Anxious.jpg';
import BlackMirror from '../../../pictures/movies/foreignSeries/BlackMirror.jpg';
import DesperateHousewives from '../../../pictures/movies/foreignSeries/DesperateHousewives.jpg';
import SexInTheCity from '../../../pictures/movies/foreignSeries/SexInTheCity.jpg';
import SexLife from '../../../pictures/movies/foreignSeries/SexLife.jpg';
import WhyWomenKill from '../../../pictures/movies/foreignSeries/WhyWomenKill.jpg';

const MoviesDescriptionData = [
  {id: 1, mainTitle: 'app.MoviesDescriptionData.mainTitle',  mainDescription: 'app.MoviesDescriptionData.mainDescription'},
];

const MoviesData = [
  {id: 1, to: '1', title: 'app.MoviesDescriptionData.withKids', text: '', src: `${ForFamaly}`, movies: [
    {id: 1, movie: 'app.MoviesData.TheParentTrap_Title', src: `${TheParentTrap}`, description: 'app.MoviesData.TheParentTrap'},
    {id: 2, movie: 'app.MoviesData.Matilda_Title', src: `${Matilda}`, description: 'app.MoviesData.Matilda'},
    {id: 3, movie: 'app.MoviesData.Doubtfire_Title', src: `${Doubtfire}`, description: 'app.MoviesData.Doubtfire'},
    {id: 4, movie: 'app.MoviesData.Wonder_Title', src: `${Wonder}`, description: 'app.MoviesData.Wonder'},
    {id: 5, movie: 'app.MoviesData.StuartLittle_Title', src: `${StuartLittle}`, description: 'app.MoviesData.StuartLittle'},
]},
  {id: 2, to: '2', title: 'app.MoviesDescriptionData.youthFilms', text: '', src: `${ForCompany}`,  movies: [
    {id: 1, movie: 'app.MoviesData.WeAreYourFriends_Title', src: `${WeAreYourFriends}`, description: 'app.MoviesData.WeAreYourFriends'},
    {id: 2, movie: 'app.MoviesData.SeventinthAgain_Title', src: `${SeventinthAgain}`, description: 'app.MoviesData.SeventinthAgain'},
    {id: 3, movie: 'app.MoviesData.MeanGirls_Title', src: `${MeanGirls}`, description: 'app.MoviesData.MeanGirls'},
    {id: 4, movie: 'Просто друзья', src: `${TheParentTrap}`, description: 'app.MoviesData.TheParentTrap'},
    {id: 5, movie: 'Цыпочка', src: `${TheParentTrap}`, description: 'app.MoviesData.TheParentTrap'},
]},
  {id: 3, to: '3', title: 'app.MoviesDescriptionData.romanticFilms', text: '', src: `${Romantical}`, movies: [
    {id: 1, movie: 'Отпуск по обмену'},
    {id: 2, movie: 'Пассажиры'},
    {id: 3, movie: 'Предложение'},
    {id: 4, movie: 'Клятва'},
    {id: 5, movie: 'За бортом'},
]},
  {id: 4, to: '4', title: 'app.MoviesDescriptionData.russianSeries', text: '', src: `${RussianSeries}`, movies: [
    {id: 1, movie: 'Контейнер', src: `${Konteiner}`, description: 'app.MoviesData.Konteiner'},
    {id: 2, movie: 'Озабоченные или любовь зла', src: `${Anxious}`, description: 'app.MoviesData.Anxious'},
    {id: 3, movie: 'ИП Пирогова', src: `${Pirogova}`, description: 'app.MoviesData.Pirogova'},
    {id: 4, movie: 'Бригада', src: `${Brigada}`, description: 'app.MoviesData.Brigada'},
    {id: 5, movie: 'Сладкая жизнь', src: `${SugarLife}`, description: 'app.MoviesData.SugarLife'},
    {id: 6, movie: 'Обычная женщина', src: `${UsualWoman}`, description: 'app.MoviesData.UsualWoman'},
    {id: 7, movie: 'Бывшие', src: `${Bivshie}`, description: 'app.MoviesData.Bivshie'},
    {id: 8, movie: 'Кухня', src: `${Kitchen}`, description: 'app.MoviesData.Kitchen'},
    {id: 9, movie: 'Call-центр', src: `${CallCenter}`, description: 'app.MoviesData.CallCenter'},
    {id: 10, movie: 'Война семей', src: `${FamilyWar}`, description: 'app.MoviesData.FamilyWar'},
]},
  {id: 5, to: '5', title: 'app.MoviesDescriptionData.comedies', text: '', src: `${Comedies}`, movies: [
    {id: 1, movie: 'Притворись моей женой'},
    {id: 2, movie: 'Почему он'},
    {id: 3, movie: 'Мы Миллеры'},
    {id: 4, movie: 'Красотка на всю голову'},
    {id: 5, movie: 'Эта дурацкая любовь'},
    {id: 6, movie: 'Чего ждать,когда ждёшь ребенка'},
    {id: 7, movie: 'Как отделаться от парня за 10 дней'},
    {id: 8, movie: 'Голая правда'},
    {id: 9, movie: 'Безбрачная неделя'},
    {id: 10, movie: 'Незваные гости (2005)'},
    {id: 11, movie: 'Хочу,как ты'},
]},
  {id: 6, to: '6', title: 'app.MoviesDescriptionData.thrillers', text: '', src: `${Thrillers}`, movies: [
    {id: 1, movie: 'Вне себя'},
    {id: 2, movie: 'Области тьмы'},
    {id: 3, movie: 'Никто (2021)'},
    {id: 4, movie: 'Поездка (2021)'},
    {id: 5, movie: 'Ветреная река'},
    {id: 6, movie: 'Выхода нет'},
    {id: 7, movie: 'Воздушный маршал'},
    {id: 8, movie: 'Петля времени'},
    {id: 9, movie: 'Законопослушный гражданин'},
    {id: 10, movie: 'Три дня на побег'},
]},
  {id: 7, to: '7', title: 'app.MoviesDescriptionData.disasters', text: '', src: `${Catastrophes}`, movies: [
    {id: 1, movie: 'Гренландия', src: `${Grendlandia}`, description: 'app.MoviesData.Grendlandia'},
    {id: 2, movie: 'Разлом Сан-Андреас', src: `${SanAndreas}`, description: 'app.MoviesData.SanAndreas'},
    {id: 3, movie: '2012', src: `${twoThousandTwelve}`, description: 'app.MoviesData.twoThousandTwelve'},
    {id: 4, movie: 'Волна', src: `${Wave}`, description: 'app.MoviesData.Wave'},
    {id: 5, movie: 'Разлом', src: `${Fault}`, description: 'app.MoviesData.Fault'},
    {id: 6, movie: 'Монстро', src: `${Monstro}`, description: 'app.MoviesData.Monstro'},
]},
  {id: 8, to: '8', title: 'app.MoviesDescriptionData.aboutSpace', text: '', src: `${Space}`, movies: [
    {id: 1, movie: 'Интерстеллар', src: `${Monstro}`, description: 'app.MoviesData.Interstellar'},
    {id: 2, movie: 'Пассажиры', src: `${Monstro}`, description: 'app.MoviesData.Passengers'},
    {id: 3, movie: 'Марсианин', src: `${Monstro}`, description: 'app.MoviesData.Martian'},
    {id: 4, movie: 'Стражи Галактики', src: `${Monstro}`, description: 'app.MoviesData.GuardiansOfTheGalaxy'},
    {id: 5, movie: 'Гравитация', src: `${Monstro}`, description: 'app.MoviesData.Gravity'},
]},
  {id: 9, to: '9', title: 'app.MoviesDescriptionData.americanSeries', text: '', src: `${ForeignSeries}`, movies: [
    {id: 1, movie: 'Секс в большом городе', src: `${SexInTheCity}`, description: ''},
    {id: 2, movie: 'Отчаянные домохозяйки', src: `${DesperateHousewives}`, description: ''},
    {id: 3, movie: 'Почему женшины убивают', src: `${WhyWomenKill}`, description: ''},
    {id: 4, movie: 'Секс / жизнь', src: `${SexLife}`, description: ''},
    {id: 5, movie: 'Черное зеркало', src: `${BlackMirror}`, description: ''},
]},
  {id: 10, to: '10', title: 'app.MoviesDescriptionData.adventureFilms', text: '', src: `${RussianSeries}`, movies: [
    {id: 1, movie: 'Красное уведомление'},
    {id: 2, movie: 'Затерянный город'},
    {id: 3, movie: 'Быстрее пули'},
    {id: 4, movie: 'Анчартед'},
    {id: 5, movie: 'Круиз по джунглям'},
    {id: 6, movie: 'Джуманджи'},
    {id: 7, movie: 'Джуманджи 2'},
]},
];

export {MoviesDescriptionData, MoviesData};
