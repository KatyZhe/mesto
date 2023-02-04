import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popup, { submitForm }) {
        super(popup);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__item');
        this._button = this._popup.querySelector('.popup__button');
        this._buttonText = this._button.textContent;
    }

    //получить данные всех инпутов в виде объекта
    _getInputValues() {
        this._formValues = {};

        this._inputList.forEach(item => {
            this._formValues[item.name] = item.value;
        });

        return this._formValues;
    };

    //присваиваем значению инпута введенные данные из объекта с инпутами
    setInputValues(data) {
        this._inputList.forEach((input) => {
          input.value = data[input.name];
        });
    };

    //меняем текст кнопки в процессе обработки запроса сервером
    changeBtnText(isLoading, btnText = "Сохранение...") {
        if (isLoading) {
          this._button.textContent = btnText;
        } else {
          this._button.textContent = this._buttonText;
        }
    };

    //слушатель
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();

            this._submitForm(this._getInputValues())
        });
    };

    close() {
        super.close();
        this._form.reset();
    };
};

export default PopupWithForm;