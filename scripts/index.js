let buttonElement = document.querySelector('.profile__edit-button');
let popupElement = document.querySelector('.popup_profile');
let closeElement = popupElement.querySelector('.popup__close');
let saveChanges = popupElement.querySelector('.popup__submit');
let formElement = document.querySelector('.popup__form');
let closeButton = document.querySelector('.popup__submit');
let nameProfile = document.querySelector('.profile__user-name');
let jobProfile = document.querySelector('.profile__user-info');
let nameInput = document.querySelector('.popup__item_name_input');
let jobInput = document.querySelector('.popup__item_job_input');

function openPopup() {
  popupElement.classList.add('popup_opened');
};

function closePopup() {
  popupElement.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value; // Выберите элементы, куда должны быть вставлены значения полей и вставьте новые значения с помощью textContent
  jobProfile.textContent = jobInput.value; // Выберите элементы, куда должны быть вставлены значения полей и вставьте новые значения с помощью textContent
  closePopup();
};

buttonElement.addEventListener('click', function save() {
  openPopup();
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

closeElement.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);

const addButton = document.querySelector('.profile__add-button');
const popupAddForm = document.querySelector('.popup_addplace');
const popupAddCloseButton = popupAddForm.querySelector('.popup__close');
const cardContainer = document.querySelector('.elements');
const namePlaceInput = document.querySelector('.popup__item_title_input');
const linkPlaceInput = document.querySelector('.popup__item_place_input');
const saveAddBtn = popupAddForm.querySelector('.popup__submit');
const popupImage = document.querySelector('.popup_large-img');
const closeImgBtn = popupImage.querySelector('.popup__close');
const imageSrc = document.querySelector('.element__image');  //Это картинка при тыке на которую надо развернуть ее на весь экран
const popupLarge = document.querySelector('.popup_large-img'); //Это сам попап
const popupBigImage = popupLarge.querySelector('.popup__image'); //Это картинка внутри попапа
const closeBigImage = popupLarge.querySelector('.popup__close'); //Кнопка закрыть попап

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Открыть-закрыть попап

function openAddPopup() {
  popupAddForm.classList.add('popup_opened');
}

function closeAddPopup() {
  popupAddForm.classList.remove('popup_opened');
}

function closePopupImage() {
  popupImage.classList.remove('.popup_opened');
}

closeImgBtn.addEventListener('click', closePopupImage);

addButton.addEventListener('click', openAddPopup);

popupAddCloseButton.addEventListener('click', closeAddPopup);
saveAddBtn.addEventListener('click', closeAddPopup);

//Загрузка карточек при открытии страницы

const cardTemplate = document.querySelector('#additional_card');

//Удалить элемент

const handleDeleteCard = (event) => {
  event.target.closest('.element').remove();
}

// Лайкнуть элемент

const handleLikedCard = (event) => {
  event.target.closest('.element__like').classList.toggle('element_liked');
}

const generateCard = (dataCard) => {
  const newCard = cardTemplate.content.querySelector('.element').cloneNode(true);

  const name = newCard.querySelector('.element__title');
  name.textContent = dataCard.name;

  const placeLink = newCard.querySelector('.element__image');
  placeLink.src = dataCard.link;

  const deleteBtn = newCard.querySelector('.element__delete');
  deleteBtn.addEventListener('click', handleDeleteCard)

  const likeBtn = newCard.querySelector('.element__like');
  likeBtn.addEventListener('click', handleLikedCard);

  const bigImage = () => {
    openPopupLarge();
    popupBigImage.src = placeLink.src;
  };
  placeLink.addEventListener('click', bigImage);

  return newCard;
}

const handleSubmitAddTodoForm = (event) => {
  event.preventDefault();
  renderCard({ name: namePlaceInput.value, link: linkPlaceInput.value });
  namePlaceInput.value = '';
  linkPlaceInput.value = '';
};

const renderCard = (dataCard) => {
  cardContainer.prepend(generateCard(dataCard));
};

popupAddForm.addEventListener("submit", handleSubmitAddTodoForm);

initialCards.forEach((dataCard) => {
  renderCard(dataCard);
});

//Открыть-закрыть попап с картинкой

function openPopupLarge() {
  popupLarge.classList.add('popup_opened');  // Открыть попап
}

function closePopupLarge() {
  popupLarge.classList.remove('popup_opened'); //Закрыть попап
}

//function bigImage() {      //Открыть попап и передать src картинки из карточки = картинке попапа
//  openPopupLarge();
//  popupBigImage.src = imageSrc.src;
//};

//imageSrc.addEventListener('click', bigImage); // Само событие тыка, при котором передается src

closeBigImage.addEventListener('click', closePopupLarge); //Тык на кнопку "закрыть"
