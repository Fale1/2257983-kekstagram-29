import { isEscapeKey } from './util.js';

const form = document.querySelector('.img-upload__form');
const uploadButton = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const exitButton = document.querySelector('.img-upload__cancel');

function openOverlay () { //Ф-я открытия оверлея
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeOverlay () { //Ф-я закрытия оверлея
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  form.reset();
}

function documentKeydownHandler (event) { //Ф-я закрытия оверлея по клавише
  if (isEscapeKey(event) && !event.target.closest('.text__description')) {
    event.preventDefault();
    closeOverlay();
  }
}

uploadButton.addEventListener('change', openOverlay); //Открытия оверлея по нажатию
exitButton.addEventListener('click', closeOverlay); //Закрытие оверлея по нажатию
document.addEventListener('keydown', documentKeydownHandler); //Закрытие оверлея по нажатию клавиши
