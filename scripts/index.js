const popup = document.querySelectorAll('.popup');
const editProfileBtn = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_profile');
const popupAddForm = document.querySelector('.popup_addplace');
const popupLarge = document.querySelector('.popup_large-img'); //Это сам попап
const popupEditCloseBtn = popupEditProfile.querySelector('.popup__close');
const popupAddCloseBtn = popupAddForm.querySelector('.popup__close');
const popupImgCloseBtn = popupLarge.querySelector('.popup__close');
const formProfileContainer = document.querySelector('.popup__profile-form');
const nameProfile = document.querySelector('.profile__user-name');
const jobProfile = document.querySelector('.profile__user-info');
const nameInput = document.querySelector('.popup__item_name_input');
const jobInput = document.querySelector('.popup__item_job_input');
const addButton = document.querySelector('.profile__add-button');
const cardContainer = document.querySelector('.elements');
const namePlaceInput = document.querySelector('.popup__item_title_input');
const linkPlaceInput = document.querySelector('.popup__item_place_input');
const saveAddBtn = popupAddForm.querySelector('.popup__submit');
const imageSrc = document.querySelector('.element__image');  //Это картинка при тыке на которую надо развернуть ее на весь экран
const popupBigImage = popupLarge.querySelector('.popup__image'); //Это картинка внутри попапа

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

function openPopup(index) {
  popup[index].classList.add('popup_opened');
}

function closePopup(index) {
  popup[index].classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(0);
};

editProfileBtn.addEventListener('click', function save() {
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
    openPopup(2);
    popupBigImage.src = placeImg.src;
    popupBigImage.alt = dataCard.name;
  };
  placeImg.addEventListener('click', openBigImage);
  popupImgCloseBtn.addEventListener('click', closePopup(2));

  return newCard;
};

const handleSubmitAddForm = (event) => {
  event.preventDefault();
  renderCard({ name: namePlaceInput.value, link: linkPlaceInput.value });
  namePlaceInput.value.reset();
  linkPlaceInput.value.reset();
};

const renderCard = (dataCard) => {
  cardContainer.prepend(generateCard(dataCard));
};

initialCards.forEach((dataCard) => {
  renderCard(dataCard);
});

//Открыть-закрыть попап слушатели + сохранение результата

popupAddForm.addEventListener("submit", handleSubmitAddForm);

formProfileContainer.addEventListener('submit', formSubmitHandler);

popupEditCloseBtn.addEventListener('click', closePopup(0));

popupAddCloseBtn.addEventListener('click', closePopup(1));

addButton.addEventListener('click', openPopup(1));

saveAddBtn.addEventListener('click', closePopup(1));

editProfileBtn.addEventListener('click', openPopup(0));
