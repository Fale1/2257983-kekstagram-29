import { getRandomNumber } from './util.js';

const COMMENT_USER_NAMES = [
  'Егор',
  'Антоха',
  'Колян',
  'Юлия',
  'Татьяна',
  'Марина'
];

const COMMENT_USER_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Какой отличный кадр, вы - очень хороший фотограф!',
  'Просто отличная картинка, это невероятно!'
];

const DESCRIPTIONS = [
  'Это я так отдыхаю',
  'Кайф, братюли!',
  'А как проходит ваш отдых?',
  'Всех с наступившим отдыхом!',
  'Кто чем, а я почём',
];

const PHOTOS_COUNT = 25;

let id = 1;
let photosId = 1;
let commentId = 1;

const createComment = () => ({ //Создаем комментарий
  id: commentId++,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: COMMENT_USER_MESSAGES[getRandomNumber(0, COMMENT_USER_MESSAGES.length)],
  name: COMMENT_USER_NAMES[getRandomNumber(0, COMMENT_USER_NAMES.length)],
});

const createComments = () => { //Создаем массив комментариев
  const comments = [];
  const COMMENTS_COUNT = getRandomNumber(0, 30);

  for (let i = 0; i < COMMENTS_COUNT; i++) {
    comments.push(createComment());
  }

  return comments;
};

const createPhoto = () => ({ //Создаем фото
  id: id++,
  url: `photos/${photosId++}.jpg`,
  description: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length)],
  likes: getRandomNumber(15, 200),
  comments: createComments(),
});

const getPhotos = () => { //Создаем массив фото
  const photos = [];

  for (let i = 0; i < PHOTOS_COUNT; i++) {
    photos.push(createPhoto());
  }

  return photos;
};

export { getPhotos };
