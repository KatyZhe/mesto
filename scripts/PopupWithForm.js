import Popup from "./Popup.js";

class PopupWithForm extends Popup {
    constructor(popup, { submitForm }) {
        super(popup);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__item');
    }

    _getInputValues() {
        this._formValues = {};

        this._inputList.forEach(item => {
            this._formValues[item.name] = item.value;
        });

        return this._formValues;
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();

            this._submitForm(this._getInputValues());
            this.close();
        });
    };

    close() {
        super.close();
        this._form.reset();
    };
};

export default PopupWithForm;