import Ambient from '../../../pictures/music/Ambient.png';
import Grendlandia from '../../../pictures/movies/catastrophe/Grendlandia.jpg';
import SanAndreas from '../../../pictures/movies/catastrophe/San-Andreas.jpg';
import Wave from '../../../pictures/movies/catastrophe/Wave.jpg';
import Fault from '../../../pictures/movies/catastrophe/Fault.jpg';
import Monstro from '../../../pictures/movies/catastrophe/Monstro.jpg';

const MoviesDescriptionData = [
  {id: 1, mainTitle: 'Фильмы',  mainDescription: 'В этом разделе собраны подборки фильмов для настроения.'},
];

const MoviesData = [
  {id: 1, to: '1', title: '5 фильмов для просмотра с детьми', text: '', src: `${Ambient}`, movies: [
    {id: 1, movie: 'Ловушка для родителей'},
    {id: 2, movie: 'Матильда (1996)'},
    {id: 3, movie: 'Миссис Даутфайр'},
    {id: 4, movie: 'Чудо (2017)'},
    {id: 5, movie: 'Стюарт Литлл'},
]},
  {id: 2, to: '2', title: '5 молодежных фильмов', text: '', src: `${Ambient}`,  movies: [
    {id: 1, movie: '128 ударов сердца в минуту'},
    {id: 2, movie: 'Папе снова 17'},
    {id: 3, movie: 'Дрянные девчонки'},
    {id: 4, movie: 'Просто друзья'},
    {id: 5, movie: 'Цыпочка'},
]},
  {id: 3, to: '3', title: '5 романтических фильмов', text: '', src: `${Ambient}`, movies: [
    {id: 1, movie: 'Отпуск по обмену'},
    {id: 2, movie: 'Пассажиры'},
    {id: 3, movie: 'Предложение'},
    {id: 4, movie: 'Клятва'},
    {id: 5, movie: 'За бортом'},
]},
  {id: 4, to: '4', title: '10 отличных российских сериалов', text: '', src: `${Ambient}`, movies: [
    {id: 1, movie: 'Контейнер'},
    {id: 2, movie: 'Папе снова 17'},
    {id: 3, movie: 'Дрянные девчонки'},
    {id: 4, movie: 'Просто друзья'},
    {id: 5, movie: 'Сладкая жизнь'},
    {id: 6, movie: 'Обычная женщина'},
    {id: 7, movie: 'Бывшие'},
    {id: 8, movie: 'Кухня'},
    {id: 9, movie: 'Call-центр'},
    {id: 10, movie: 'Война семей'},
]},
  {id: 5, to: '5', title: '11 комедий для отличного вечера', text: '', src: `${Ambient}`, movies: [
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
  {id: 6, to: '6', title: '10 захватывающих триллеров', text: '', src: `${Ambient}`, movies: [
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
  {id: 7, to: '7', title: '6 фильмов про катастрофы', text: '', src: `${Ambient}`, movies: [
    {id: 1, movie: 'Гренландия', src: `${Grendlandia}`, description: 'Огромная комета приближается к нашей планете.Она состоит из множества обломков, большинство из которых «заденут» Землю и всё будущее планеты под вопросом. Главный герой Джон Геррити, его жена и сын, пытаются спастись от неизбежной катастрофы, преодолевая множество испытаний, и выжить, в наступившем хаосе.'},
    {id: 2, movie: 'Разлом Сан-Андреас', src: `${SanAndreas}`, description: 'Сильнейшее землетрясение произошло в Калифорнии,в результате которого погибли тысячи людей. Пилот спасательного вертолета Рэй и его бывшая жена Эмма отправляются из Лос-Анджелеса в Сан-Франциско, чтобы спасти свою дочь. Но их путь к спасению дочки - это только начало тех ужасных событий, которые им предстоит пережить.'},
    {id: 3, movie: '2012'},
    {id: 4, movie: 'Волна', src: `${Wave}`, description: 'Существует опасность, что повторится катастрофа, произошедшая много лет назад при сходных обстоятельствах. То, чего так боялись геологи, свершилось.Они пытаются предотвратить бедствие, но не успевают, и гигантское смертоносное цунами движется на город. Опытный геолог Кристиан вместе со своей семьей оказывается на пути невероятной разбушевавшейся стихии, теперь вынужден решать один единственный насущный вопрос — вопрос выживания и спасения своей семьи.'},
    {id: 5, movie: 'Разлом', src: `${Fault}`, description: 'Фильм "Разлом" является продолжением фильма "Волна".Геолог Кристиан очень сильно переживает, что когда-то не сумел спасти большое количество людей, погибших в результате цунами, но другие считают его героем.Спустя несколько лет он узнает о смерти своего коллеги в результате несчастного случая и пытается разобраться в причинах смерти. Побывав дома у своего погибшего друга и ознакомившись с документами, который тот оставил, Кристиан начинает понимать, что его родному городу грозит новая катастрофа и пытается убедить в этом свое руководство.Мощнейшее землетрясение в окрестностях Осло грозит уничтожить город и большую часть её жителей. Тектонический разлом проходит прямо через него, разрушая небоскребы, словно карточные домики. И снова обычный геолог вынужден спасать свою семью, которая находится в самом эпицентре трагедии.'},
    {id: 6, movie: 'Монстро', src: `${Monstro}`, description: 'Компания друзей устраивает прощальную вечеринку для уезжающего в Японию Роба в одной из нью-йоркских квартир. Вдруг в гигантском мегаполисе гаснет свет, и город сотрясают разрушения невиданного масштаба.Нечто напало на Нью-Йорк, сеет панику, разрушения и пожирает людей. Армия бессильна против мощного,гигантского монстра, а Манхэттен объявлен закрытой зоной, но где-то неподалеку от Центрального парка в беду попала девушка Роба...'},
]},
  {id: 8, to: '8', title: '5 невероятных фильмов про космос', text: '', src: `${Ambient}`, movies: [
    {id: 1, movie: 'Интерстеллар'},
    {id: 2, movie: 'Пассажиры'},
    {id: 3, movie: 'Марсианин'},
    {id: 4, movie: 'Стражи Галактики'},
    {id: 5, movie: 'Гравитация'},
]},
  {id: 9, to: '9', title: '5 отличных американских сериалов', text: '', src: `${Ambient}`, movies: [
    {id: 1, movie: 'Секс в большом городе'},
    {id: 2, movie: 'Отчаянные домохозяйки'},
    {id: 3, movie: 'Почему женшины убивают'},
    {id: 4, movie: 'Секс / жизнь'},
    {id: 5, movie: 'Черное зеркало'},
]},
  {id: 10, to: '10', title: '7 отличных приключенческих фильмов', text: '', src: `${Ambient}`, movies: [
    {id: 1, movie: 'Красное уведомление'},
    {id: 2, movie: 'Затерянный город'},
    {id: 3, movie: 'Быстрее пули'},
    {id: 4, movie: 'Анчартед'},
    {id: 5, movie: 'Круиз по джунглям'},
    {id: 6, movie: 'Джуманджи'},
    {id: 7, movie: 'Джуманджи 2uyiuyio'},
]},
];

export {MoviesDescriptionData, MoviesData};
