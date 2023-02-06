import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._image = this._popup.querySelector('.popup__image');
        this._title = this._popup.querySelector('.popup__caption');
    }

    open(name, link) {
        super.open();
        this._title.textContent = name;
        this._image.src = link;
        this._image.alt = name;
    };

    close() {
        this._title.textContent = '';
        this._image.src = '';
        this._image.alt = '';
        super.close();
    };
};

export default PopupWithImage;