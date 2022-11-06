let buttonElement = document.querySelector('.profile__edit-button');
let popupElement = document.querySelector('.popup');
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
