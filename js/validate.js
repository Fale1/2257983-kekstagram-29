const HASHTAG_PATTERN = /^#[a-zа-яё0-9]{1,18}$/i;
const MAX_HASHTAG_COUNT = 5;
const MAX_COMMENT_LENGTH = 140;

const MAX_HASHTAG_LENGTH_TEXT = 'Хэштег состоит из # и не более 20 символов';
const MAX_HASHTAG_COUNT_TEXT = `Не более ${MAX_HASHTAG_COUNT} хэштегов`;
const MAX_HASHTAG_REPEAT_TEXT = 'Хэштег не должен повторяться';
const MAX_DESCRIPTION_LENGTH_TEXT = `Не более ${MAX_COMMENT_LENGTH} символов`;

const uploadImageForm = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');

const pristine = new Pristine (uploadImageForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper',
});

const createHashtags = (value) => value.trim().toLowerCase().split(' ');

const checkHashtags = (value) => { //Проверка по паттерну хэштега
  if (!value) {
    return true;
  }
  const hashtags = createHashtags(value);
  const check = hashtags.every((element) => (element.match(HASHTAG_PATTERN)));
  return check;
};

const hashtagCountCheck = (value) => value.split(' ').length === MAX_HASHTAG_COUNT; //Проверка по количеству хэштегов

const repeatHashtagCheck = (value) => { //Проверка по повторению хэштега
  const hashtags = createHashtags(value);
  return hashtags.length === new Set(hashtags).size;
};

const descriptionFieldCheck = (value) => value.length >= MAX_COMMENT_LENGTH; //Проверка длины комментария

// const pristineValid = pristine.validate();

pristine.addValidator(hashtagField, checkHashtags, MAX_HASHTAG_LENGTH_TEXT, 1, true);
pristine.addValidator(hashtagField, hashtagCountCheck, MAX_HASHTAG_COUNT_TEXT, 1, true);
pristine.addValidator(hashtagField, repeatHashtagCheck, MAX_HASHTAG_REPEAT_TEXT, 1, true);
pristine.addValidator(descriptionField, descriptionFieldCheck, MAX_DESCRIPTION_LENGTH_TEXT, 1, false);
