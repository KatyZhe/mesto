class Card {
    constructor( data, userId, templateSelector, { handleOpenPopup, sendIdCard, likeCard, dislikeCard }) {
        this._name = data.name;
        this._link = data.link;
        this._userId = userId;
        this._templateSelector = templateSelector;
        this._handleOpenPopup = handleOpenPopup;
        this._sendIdCard = sendIdCard;
        this._item = data;
        this._id = data._id;
        this._likeCard = likeCard;
        this._dislikeCard = dislikeCard;
        this._arrayCardLikes = data.likes;
    };

    _setEventListeners() {
        this._like.addEventListener('click', () => {
            this._handleLikeCard();
        });

        this._remove.addEventListener('click', () => {
            this._sendIdCard(this._id);
        });

        this._bigImage.addEventListener("click", () => {
            this._handleOpenPopup(this._name, this._link);
        });
    };

    _handleLikeCard() {
        if (this.isLiked) {
            this._dislikeCard(this._id);
        } else {
            this._likeCard(this._id);
        }
      }
    
    likeButton() {
        this.isLiked = true;
        this._like.classList.add('element_liked');
    }
    
    dislikeButton() {
        this.isLiked = false;
        this._like.classList.remove('element_liked');
    }

    countLike(likesQuantity) {
        this._amountLike.textContent = likesQuantity;
    }

    _showMyLike() {
        if (this._arrayCardLikes.some((like) => like._id == this._userId)) {
          this.likeButton();
        } else {
          this.dislikeButton();
        }
    }

    handleDeleteCard() {
        this._element.remove();
        this._element = null;
    };

    _getTemplate() {
        const cardTemplate = document.querySelector(this._templateSelector).content
        .querySelector('.element')
        .cloneNode(true);

    return cardTemplate;
    };

    _showBasket() {
        if (this._item.owner._id === this._userId) {
            this._remove.style.display = 'block';
        } else {
            this._remove.style.display = 'none';
        }
    };

    generateCard() {
        this._element = this._getTemplate();

        this._like = this._element.querySelector('.element__like');
        this._remove = this._element.querySelector('.element__delete');
        this._bigImage = this._element.querySelector('.element__image');
        this._title = this._element.querySelector('.element__title');
        this._amountLike = this._element.querySelector('.element__likes-count');

        this._title.textContent = this._name;
        this._bigImage.src = this._link;
        this._bigImage.alt = this._name;
        this._amountLike.textContent = this._arrayCardLikes.length;
        
        this._setEventListeners();
        this._showMyLike();

        this._showBasket(); //корзинка только на своих карточках

        return this._element;

    };
};

export default Card;
