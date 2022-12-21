import { popupLarge, initialCards, openPopup, closePopup, formPlaceContainer, namePlaceInput, linkPlaceInput } from "./index.js";

class Card {
    constructor(data) {
        this._name = data.name;
        this._link = data.link;
        this._element = null;
        this._remove = null;
        this._like = null;
    };

    _handleLikedCard() {
        this._like = this._element.querySelector('.element__like');
        this._like.addEventListener('click', () => {
            this._like.classList.toggle('element_liked');
        });
    };

    _handleDeleteCard() {
        this._remove = this._element.querySelector('.element__delete');
        this._remove.addEventListener('click', () => {
            this._remove.closest('.element').remove();
        });
    };

    _getTemplate() {
        const cardTemplate = document.querySelector('#additional_card').content
        .querySelector('.element')
        .cloneNode(true);

        return cardTemplate;
    };

    generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;

        this._handleLikedCard();
        this._handleDeleteCard();
        this._openBigImage();

        return this._element;
    };

    _openBigImage() {
        this._bigImage = this._element.querySelector('.element__image').addEventListener('click', () => {
          openPopup(popupLarge);
            document.querySelector('.popup__image').src = this._link;
            this._element.querySelector('.element__image').alt = this._name;
        });
    };
};

export default Card;