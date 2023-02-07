// СПАСИБО БОЛЬШОЕ! :)

import {
  validationSettings,
  cardListSelector,
  buttonEditProfile,
  formProfileContainer,
  formPlaceContainer,
  formAvatarContainer,
  buttonAdd,
  buttonEditAvatar
} from "../utils/constants.js";

import './index.css';

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupSubmitDeletion from "../components/PopupSubmitDeletion.js";

//создание карточки из класса Section

const cardList = new Section({
  renderer: (item) => cardList.addItem(createNewCard(item, '.additional_card'))
}, cardListSelector);

function createNewCard(item, template) {
  const card = new Card(item, userId, template, {
    handleOpenPopup: (name, link) => {
      openPopupImage.open(name, link);
    },
    sendIdCard: (id) => {
      popupDeleteCard.open();
      popupDeleteCard.setId(id);
      popupDeleteCard.callBackDeleteCard(() => {
        popupDeleteCard.changeBtnText(true);
        api.deleteCard(id).then(() => {
          card.handleDeleteCard();
        })
          .then(() => popupDeleteCard.close())
          .catch((err) => {
            console.log(`Ошибка: ${err}.`);
          })
          .finally(() => {
            popupDeleteCard.changeBtnText(false);
          });
      })
    },
    likeCard: (id) => {
      api.likeCard(id).then((data) => {
        card.likeButton();
        card.countLike(data.likes.length);
      })
        .catch((err) => {
          console.log(`Ошибка: ${err}.`);
        });
    },
    dislikeCard: (id) => {
      api.dislikeCard(id).then((data) => {
        card.dislikeButton();
        card.countLike(data.likes.length);
      })
        .catch((err) => {
          console.log(`Ошибка: ${err}.`);
        });
    }
  });
  const addCard = card.generateCard();

  return addCard;
}

//Попап подтверждения удаления карточки

const popupDeleteCard = new PopupSubmitDeletion('.popup_sure');
popupDeleteCard.setEventListeners();

//Открытие попапа с большой картинкой

const openPopupImage = new PopupWithImage('.popup_large-img');
openPopupImage.setEventListeners();
openPopupImage.close();

// Изменение данных о пользователе

const profileEdit = new UserInfo({ name: '.profile__user-name', job: '.profile__user-info', avatar: '.profile__avatar' });

const popupProfileEdit = new PopupWithForm('.popup_profile', {
  submitForm: (inputObj) => {
    popupProfileEdit.changeBtnText(true);
    return api.changeUserInfo(inputObj)
      .then((data) => {
        profileEdit.setUserProfile(data);
        popupProfileEdit.close();
      }).catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupProfileEdit.changeBtnText(false);
      });
  }
});

popupProfileEdit.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
  popupProfileEdit.open();
  const inputList = profileEdit.getUserInfo();
  popupProfileEdit.setInputValues(inputList);
  formValidators['profileform'].resetValidation();
});

//Создание новой карточки юзером

function createInstanceCard(name, link) {
  return api.createCard({ name, link });
};

const addNewPlace = new PopupWithForm('.popup_addplace', {
  submitForm: ({ inputplacename, inputplacelink }) => {
    addNewPlace.changeBtnText(true);
    createInstanceCard(inputplacename, inputplacelink, '.additional_card')
      .then((data) => {
        cardList.addItem(createNewCard(data, '.additional_card'));
        addNewPlace.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        addNewPlace.changeBtnText(false);
      });
  }
});

addNewPlace.setEventListeners();

buttonAdd.addEventListener('click', () => {
  addNewPlace.open();
  formValidators['placeform'].resetValidation();
});

//Попап изменения аватара

const editAvatar = new PopupWithForm('.popup_avatar', {
  submitForm: (inputObj) => {
    editAvatar.changeBtnText(true);
    return api.changeAvatar(inputObj)
      .then((data) => {
        profileEdit.setUserAvatar(data);
        editAvatar.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        editAvatar.changeBtnText(false);
      });
  }
});

editAvatar.setEventListeners();

buttonEditAvatar.addEventListener('click', () => {
  editAvatar.open();
  formValidators['avatarform'].resetValidation();
});

//Валидация попапов

const formValidators = {};

// Включение валидации
const enableValidation = (validationSettings) => {
  const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationSettings, formElement); //тут из-за неправильного порядка аргументов не работало)))) долго я искала причину))))
    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name');

    // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationSettings);

//Отрисовываем карточки из массива с сервера

const configApi = {
  url: "https://mesto.nomoreparties.co/v1/cohort-58",
  headers: {
    authorization: '45d022b9-9c09-4bab-9547-37af2b0af73d',
    "Content-Type": "application/json",
  }
};

const api = new Api(configApi);

//Инфа о юзере с сервера

let userId;
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    cardList.renderItems(cards);
    profileEdit.setUserProfile(user);
    profileEdit.setUserAvatar(user);
    userId = user._id;
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}.`);
  });