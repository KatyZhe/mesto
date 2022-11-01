let buttonElement = document.querySelector('.profile__edit-button');
let popupElement = document.querySelector('.popup');
let closeElement = popupElement.querySelector('.popup__close');
let saveChanges = popupElement.querySelector('.popup__submit');

function openPopup() {
  buttonElement.addEventListener('click', () => {
    popupElement.classList.add('popup_opened');
  });
};

openPopup();

function closePopup() {
  closeElement.addEventListener('click', () => {
    popupElement.classList.remove('popup_opened');
  });
};

closePopup();

function save() {
  saveChanges.addEventListener('click', () => {
    popupElement.classList.remove('popup_opened');
  });
};

save();

// Находим форму в DOM
let formElement = document.querySelector('.popup__container');
let closeButton = document.querySelector('.popup__submit');
// Находим поля формы в DOM
let nameProfile = document.querySelector('.profile__user-name');
let jobProfile = document.querySelector('.profile__user-info');
let nameInput = document.querySelector('.popup__user-name');
let jobInput = document.querySelector('.popup__user-info');

buttonElement.addEventListener('.click', function () {
  openPopup();
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInput.value; // Получите значение полея nameInput из свойства value
  jobInput.value; // Получите значение полея jobInput из свойства value
  nameProfile.textContent = nameInput.value; // Выберите элементы, куда должны быть вставлены значения полей и вставьте новые значения с помощью textContent
  jobProfile.textContent = jobInput.value; // Выберите элементы, куда должны быть вставлены значения полей и вставьте новые значения с помощью textContent
  save();
};

formElement.addEventListener('submit', formSubmitHandler);
