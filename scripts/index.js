const buttonEditProfile = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_profile');
const addPlacePopup = document.querySelector('.popup_addplace');
const popupLarge = document.querySelector('.popup_large-img');
const popupEditCloseBtn = popupEditProfile.querySelector('.popup__close');
const popupAddCloseBtn = addPlacePopup.querySelector('.popup__close');
const popupImgCloseBtn = popupLarge.querySelector('.popup__close');
const formProfileContainer = document.querySelector('.popup__profile-form');
const formPlaceContainer = document.querySelector('.popup__place-form');
const nameProfile = document.querySelector('.profile__user-name');
const jobProfile = document.querySelector('.profile__user-info');
const nameInput = document.querySelector('.popup__item_name_input');
const jobInput = document.querySelector('.popup__item_job_input');
const addButton = document.querySelector('.profile__add-button');
const cardContainer = document.querySelector('.elements');
const namePlaceInput = document.querySelector('.popup__item_title_input');
const linkPlaceInput = document.querySelector('.popup__item_place_input');
const saveAddBtn = addPlacePopup.querySelector('.popup__button');
const imageSrc = document.querySelector('.element__image');
const popupBigImage = popupLarge.querySelector('.popup__image');
const formInput = document.querySelectorAll('.popup__item');
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

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  popup.addEventListener('click', closePopupOverlay);
  document.addEventListener('keydown', closePopupEsc);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEsc);
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

const generateCard = (dataCard) => {
  const newCard = cardTemplate.content.querySelector('.element').cloneNode(true);

  const name = newCard.querySelector('.element__title');
  name.textContent = dataCard.name;

  const placeImg = newCard.querySelector('.element__image');
  placeImg.src = dataCard.link;
  placeImg.alt = dataCard.name;

  const deleteBtn = newCard.querySelector('.element__delete');
  deleteBtn.addEventListener('click', handleDeleteCard)

  const likeBtn = newCard.querySelector('.element__like');
  likeBtn.addEventListener('click', handleLikedCard);

  const openBigImage = () => {
    openPopup(popupLarge);
    popupBigImage.src = placeImg.src;
    popupBigImage.alt = dataCard.name;
  };
  placeImg.addEventListener('click', openBigImage);

  return newCard;
};

const handleSubmitAddForm = (event) => {
  event.preventDefault();
  renderCard({ name: namePlaceInput.value, link: linkPlaceInput.value });
  formPlaceContainer.reset();
  closePopup(addPlacePopup);
  disabledButtonState();
};

const renderCard = (dataCard) => {
  cardContainer.prepend(generateCard(dataCard));
};

initialCards.forEach((dataCard) => {
  renderCard(dataCard);
});

//Открыть-закрыть попап слушатели + сохранение результата

formPlaceContainer.addEventListener('submit', handleSubmitAddForm);

addButton.addEventListener('click', () => { openPopup(addPlacePopup) });
popupAddCloseBtn.addEventListener('click', () => { closePopup(addPlacePopup) });

formProfileContainer.addEventListener('submit', formEditHandler);

buttonEditProfile.addEventListener('click', () => { openPopup(popupEditProfile) });
popupEditCloseBtn.addEventListener('click', () => { closePopup(popupEditProfile) });

popupImgCloseBtn.addEventListener('click', () => { closePopup(popupLarge) });