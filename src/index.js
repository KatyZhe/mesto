import { validationSettings, 
  cardListSelector,
  buttonEditProfile,
  formProfileContainer,
  formPlaceContainer,
  formAvatarContainer,
  buttonAdd,
  buttonEditAvatar,
  profileAvatar,
  nameProfile,
  jobProfile
} from "../src/scripts/constants.js";

import '../src/pages/index.css';

import Card from "../src/scripts/Card.js";
import FormValidator from "../src/scripts/FormValidator.js";
import Section from "../src/scripts/Section.js";
import Popup from "../src/scripts/Popup.js";
import PopupWithImage from "../src/scripts/PopupWithImage.js";
import PopupWithForm from "../src/scripts/PopupWithForm.js";
import UserInfo from "../src/scripts/UserInfo.js";
import Api from "../src/scripts/Api.js";
import PopupSubmitDeletion from "../src/scripts/PopupSubmitDeletion";

//создание карточки из класса Section

const cardList = new Section({
  renderer: (item) => cardList.addItem(generateCard(item, '.additional_card'))
}, cardListSelector);

function generateCard(item, template) {
  const card = new Card(item, userId, template, {
    handleOpenPopup: (name, link) => {
      openPopupImage.open(name, link);
    },
    sendIdCard: (id) => {
      popupDeleteCard.open();
      popupDeleteCard.getId(id);
      popupDeleteCard.callBackDeleteCard(() => {
        popupDeleteCard.changeBtnText(true);
        api.deleteCard(id).then(() => {
            card.deleteCard();
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
      });
    },
    dislikeCard: (id) => {
      api.dislikeCard(id).then((data) => {
        card.dislikeButton();
        card.countLike(data.likes.length);
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
 
// Изменение данных о пользователе

const profileEdit = new UserInfo({ name: '.profile__user-name' , job: '.profile__user-info', avatar: '.profile__avatar' });

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
});

//Создание новой карточки юзером

function createInstanceCard(name, link, templateSelector) {
  return api.createCard({ name, link }, templateSelector)
};

const addNewPlace = new PopupWithForm('.popup_addplace', {
  submitForm: ({ inputplacename, inputplacelink }) => {
    addNewPlace.changeBtnText(true);
    createInstanceCard(inputplacename, inputplacelink, '.additional_card')
      .then(() => {
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
});

//Валидация попапов

//1 добавление карточки

const validationFormAddCard = new FormValidator(validationSettings, formPlaceContainer);
validationFormAddCard.enableValidation();

//2 изменение профиля

const validationFormEditProfile = new FormValidator(validationSettings, formProfileContainer);
validationFormEditProfile.enableValidation();

//3 изменение аватара

const validationFormAvatar = new FormValidator(validationSettings, formAvatarContainer);
validationFormAvatar.enableValidation();

//Отрисовываем карточки из массива с сервера

const configApi = {
  url: "https://mesto.nomoreparties.co/v1/cohort-58",
  headers: {
    authorization: '45d022b9-9c09-4bab-9547-37af2b0af73d',
    "Content-Type": "application/json",
  }
};

const api = new Api(configApi);

api.getInitialCards()
.then((res) => {
  cardList.renderItems(res);
});

//Инфа о юзере с сервера

let userId;
Promise.all([api.getUserInfo()])
  .then(([user]) => {
    nameProfile.textContent = user.name;
    jobProfile.textContent = user.about;
    profileAvatar.src = user.avatar;
    userId = user._id;
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}.`);
  });