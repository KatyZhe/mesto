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

const checkInputValidity = (formElement, inputElement, validationSettings) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationSettings);
  } else {
    hideInputError(formElement, inputElement, validationSettings)
  }
};

//Активность-неактивность кнопки сабмит

const disableSubmitButton = (buttonElement, validationSettings) => {
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add(validationSettings.inactiveButtonClass);
};

const enableSubmitButton = (buttonElement, validationSettings) => {
  buttonElement.removeAttribute("disabled", false);
  buttonElement.classList.remove(validationSettings.inactiveButtonClass);
};

const hasInvalidInput = (inputList) => {
  return inputList.some(input => !input.validity.valid);
};

const toggleButtonState = (inputList, buttonElement, validationSettings) => {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement, validationSettings);
  } else {
    enableSubmitButton(buttonElement, validationSettings);
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
      checkInputValidity(formElement, inputElement, validationSettings);
      toggleButtonState(inputList, buttonElement, validationSettings);
      formElement.addEventListener('reset', () => {
        setTimeout(() => {
          toggleButtonState(inputList, buttonElement, validationSettings);
        });
      });
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