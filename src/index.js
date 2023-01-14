import { validationSettings, 
  initialCards, 
  cardListSelector,
  buttonEditProfile,
  formProfileContainer,
  formPlaceContainer,
  nameInput,
  jobInput,
  buttonAdd,
} from "../src/scripts/constants.js";

import '../src/pages/index.css';

import Card from "../src/scripts/Card.js";
import FormValidator from "../src/scripts/FormValidator.js";
import Section from "../src/scripts/Section.js";
import Popup from "../src/scripts/Popup.js";
import PopupWithImage from "../src/scripts/PopupWithImage.js";
import PopupWithForm from "../src/scripts/PopupWithForm.js";
import UserInfo from "../src/scripts/UserInfo.js";

//создание карточки из класса Section

const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => defaultCardList.addItem(generateCard(item, '.additional_card'))
}, cardListSelector);

defaultCardList.renderItems();

function generateCard(item, template) {
  const card = new Card(item, template, {
    handleOpenPopup: (name, link) => {
      openPopupImage.open(name, link);
    }
  });
  const addCard = card.generateCard();

  return addCard;
}

//Открытие попапа с большой картинкой

const openPopupImage = new PopupWithImage('.popup_large-img');
openPopupImage.setEventListeners();

//Функция добавления новой карточки

function createInstanceCard(name, link, templateSelector) {
  return generateCard({ name, link }, templateSelector);
};
 
// Изменение данных о пользователе

const profileEdit = new UserInfo({ name: '.profile__user-name' , job: '.profile__user-info' });

const popupProfileEdit = new PopupWithForm('.popup_profile', { 
  submitForm: ({ inputname, inputjob }) => {
    profileEdit.setUserInfo(inputname, inputjob);
  }
});

popupProfileEdit.setEventListeners();

//Создание новой карточки

const addNewPlace = new PopupWithForm('.popup_addplace', {
  submitForm: ({ inputplacename, inputplacelink }) => {
    defaultCardList.addItem(createInstanceCard(inputplacename, inputplacelink, '.additional_card'))
  },
});

addNewPlace.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
  popupProfileEdit.open();
  const inputList = profileEdit.getUserInfo();
  nameInput.value = inputList.name;
  jobInput.value = inputList.job;
});

buttonAdd.addEventListener('click', () => {
  addNewPlace.open();
});

const validationFormAddCard = new FormValidator(validationSettings, formPlaceContainer);
validationFormAddCard.enableValidation();

const validationFormEditProfile = new FormValidator(validationSettings, formProfileContainer);
validationFormEditProfile.enableValidation();