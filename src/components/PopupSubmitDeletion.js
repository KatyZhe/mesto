import Popup from '../components/Popup.js';

class PopupSubmitDeletion extends Popup {
    constructor(popup) {
        super(popup);
        this._submitDeleteBtn = this._popup.querySelector('.popup__button');
        this._buttonText = this._submitDeleteBtn.textContent;
    }

    setId(id) {
        this.idCardDelete = id;
    }

    callBackDeleteCard(callback) {
        this._callBackDeleteCard = callback;
    }

    changeBtnText(isLoading, btnText = "Удаление...") {
        if (isLoading) {
            this._submitDeleteBtn.textContent = btnText;
        } else {
            this._submitDeleteBtn.textContent = this._buttonText;
        }
      }

    setEventListeners() {
        super.setEventListeners();
        
        this._submitDeleteBtn.addEventListener('click', () => {
            this._callBackDeleteCard();
        });
    }
}

export default PopupSubmitDeletion;