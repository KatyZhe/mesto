const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_profile');
export const placeAddPopup = document.querySelector('.popup_addplace');
export const popupLarge = document.querySelector('.popup_large-img');
const popupEditCloseBtn = popupEditProfile.querySelector('.popup__close');
const popupAddCloseBtn = placeAddPopup.querySelector('.popup__close');
const popupImgCloseBtn = popupLarge.querySelector('.popup__close');
const formProfileContainer = document.querySelector('.popup__profile-form');
export const formPlaceContainer = document.querySelector('.popup__place-form');
const nameProfile = document.querySelector('.profile__user-name');
const jobProfile = document.querySelector('.profile__user-info');
const nameInput = document.querySelector('.popup__item_name_input');
const jobInput = document.querySelector('.popup__item_job_input');
const buttonAdd = document.querySelector('.profile__add-button');
export const namePlaceInput = document.querySelector('.popup__item_title_input');
export const linkPlaceInput = document.querySelector('.popup__item_place_input');

import { validationSettings, initialCards } from "./constants.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

//Функция открыть-закрыть попап

const closePopupOverlay = (event) => {
  const isOverlay = event.target.classList.contains('popup_opened');
  if (isOverlay) {
    closePopup(event.currentTarget);
    }
};

const closePopupEsc = (event) => {
  const isEsc = (event.key === 'Escape');
  if (isEsc) {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};

export const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closePopupOverlay);
  document.addEventListener('keydown', closePopupEsc);
};

export const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEsc);
};

function handleOpenPopup(name, link) {
  document.querySelector('.popup__image').src = link;
  this._element.querySelector('.element__image').alt = name;
  document.querySelector('.popup__caption').textContent = name;
  openPopup(popupLarge);
};

function formEditHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupEditProfile);
};

buttonEditProfile.addEventListener('click', function save() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

const createCard = (data, templateSelector, handleOpenPopup) => {
  const card = new Card(data, templateSelector, handleOpenPopup);
  document.querySelector('.elements').prepend(card.generateCard());
};

initialCards.forEach((data) => {
  createCard(data, '.additional_card', handleOpenPopup);
});

const handleSubmitAddForm = (event) => {
  event.preventDefault();

  createCard({ name: namePlaceInput.value, link: linkPlaceInput.value }, '.additional_card', handleOpenPopup);
  
  formPlaceContainer.reset();
  closePopup(placeAddPopup);
};

const validationFormAddCard = new FormValidator(validationSettings, formPlaceContainer);
validationFormAddCard.enableValidation();

const validationFormEditProfile = new FormValidator(validationSettings, formProfileContainer);
validationFormEditProfile.enableValidation();

//Открыть-закрыть попап слушатели + сохранение результата

formPlaceContainer.addEventListener('submit', handleSubmitAddForm);

buttonAdd.addEventListener('click', () => { openPopup(placeAddPopup) });
popupAddCloseBtn.addEventListener('click', () => { closePopup(placeAddPopup) });

formProfileContainer.addEventListener('submit', formEditHandler);

buttonEditProfile.addEventListener('click', () => { openPopup(popupEditProfile) });
popupEditCloseBtn.addEventListener('click', () => { closePopup(popupEditProfile) });

popupImgCloseBtn.addEventListener('click', () => { closePopup(popupLarge) });