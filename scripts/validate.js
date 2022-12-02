validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorInput: 'popup__span_active'
  };

  //Показать-скрыть ошибку валидации

  const showError = (formElement, inputElement, errorMessage, inputErrorClass, errorInput) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorInput);
  };
  
  const hideError = (formElement, inputElement, inputErrorClass, errorInput) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorInput);
    errorElement.textContent = "";
  };
  
  const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    if (!inputElement.validity.valid) {
      showError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideError(formElement, inputElement, inputErrorClass, errorClass);
    }
  };

  //Активность-неактивность кнопки сабмит

  function disabledButtonState() {
    const submitBtn = document.querySelector('.popup__addplace-button');
    submitBtn.disabled = true;
    submitBtn.classList.add('popup__button_disabled');
  };

  const hasInvalidInput = (inputList) => {
    return inputList.some(input => !input.validity.valid)
  };

  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.setAttribute("disabled", true);
      buttonElement.classList.add('popup__button_disabled');
    } else {
      buttonElement.removeAttribute("disabled", false);
      buttonElement.classList.remove('popup__button_disabled');
    }
  };
  
  const setEventListeners = (formElement, inputSelector, inactiveButtonClass) => {
    buttonState(formElement, inputSelector, inactiveButtonClass);
  };
  
  function buttonState(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(validationSettings.inputSelector));
    const buttonElement = formElement.querySelector(validationSettings.submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  const enableValidation = (validationSettingsElement) => {
    const formList = Array.from(document.querySelectorAll(validationSettingsElement.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement);
    });
  };
  
  enableValidation(validationSettings);