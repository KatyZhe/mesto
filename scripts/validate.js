validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__span_active'
};

//Показать-скрыть ошибку валидации

const showInputError = (formElement, inputElement, errorMessage, validationSettings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationSettings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationSettings.errorClass);
};

const hideInputError = (formElement, inputElement, validationSettings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationSettings.inputErrorClass);
  errorElement.classList.remove(validationSettings.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationSettings);
  } else {
    hideInputError(formElement, inputElement, validationSettings)
  }
};

//Активность-неактивность кнопки сабмит

const enableSubmitButton = (buttonElement, validationSettings) => {
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add(validationSettings.inactiveButtonClass);
};

const disableSubmitButton = (buttonElement, validationSettings) => {
  buttonElement.removeAttribute("disabled", false);
  buttonElement.classList.remove(validationSettings.inactiveButtonClass);
};

function disabledButtonState(validationSettings) {
  const submitButtons = document.querySelectorAll(validationSettings.submitButtonSelector);
  submitButtons.forEach((element) => {
    element.disabled = true;
    element.classList.add(validationSettings.inactiveButtonClass);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some(input => !input.validity.valid)
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    enableSubmitButton(buttonElement, validationSettings);
  } else {
    disableSubmitButton(buttonElement, validationSettings);
  }
};

const setEventListeners = (formElement, validationSettings) => {
  buttonState(formElement, validationSettings);
};

function buttonState(formElement, validationSettings) {
  const inputList = Array.from(formElement.querySelectorAll(validationSettings.inputSelector));
  const buttonElement = formElement.querySelector(validationSettings.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (validationSettings) => {
  const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, validationSettings);
  });
};

enableValidation(validationSettings);