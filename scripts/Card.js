class Card {
    constructor(data, templateSelector, { handleOpenPopup }) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleOpenPopup = handleOpenPopup;
    };

    _setEventListeners() {
        this._like.addEventListener('click', () => {
            this._handleLikedCard();
        });

        this._remove.addEventListener('click', () => {
            this._handleDeleteCard();
        });

        this._bigImage.addEventListener("click", () => {
            this._handleOpenPopup(this._name, this._link);
        });
    };

    _handleLikedCard() {
        this._like.classList.toggle('element_liked');
    };

    _handleDeleteCard() {
        this._element.remove();
        this._element = null;
    };

    _getTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content
        .querySelector('.element')
        .cloneNode(true);

    return cardTemplate;
    };

    generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;

        this._like = this._element.querySelector('.element__like');
        this._remove = this._element.querySelector('.element__delete');
        this._bigImage = this._element.querySelector('.element__image');

        this._setEventListeners();

        return this._element;
    };
};

export default Card;