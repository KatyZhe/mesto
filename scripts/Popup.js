class Popup {
    constructor(popup) {
        this._popup = document.querySelector(popup);
    };

    open() {
        this._popup.classList.add('popup_opened');
        this._handleEscClose();
    };

    close() {
        this._popup.classList.remove('popup_opened');
        this._handleEscClose();
    };

    _handleEscClose() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.close();
            }
        })
    };

    _closePopupOverlay(event) {
        const isOverlay = event.target.classList.contains('popup_opened');
        if (isOverlay) {
            this.close(event.target);
        }
    };

    setEventListeners() {
        this._popup.querySelector('.popup__close').addEventListener('click', () => this.close());
        this._popup.addEventListener('click', (event) => this._closePopupOverlay(event));
    };
}

export default Popup;