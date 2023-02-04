export const buttonEditProfile = document.querySelector('.profile__edit-button');
export const popupEditProfile = document.querySelector('.popup_profile');
export const placeAddPopup = document.querySelector('.popup_addplace');
export const popupLarge = document.querySelector('.popup_large-img');
export const popupEditCloseBtn = popupEditProfile.querySelector('.popup__close');
export const popupAddCloseBtn = placeAddPopup.querySelector('.popup__close');
export const popupImgCloseBtn = popupLarge.querySelector('.popup__close');
export const formProfileContainer = document.querySelector('.popup__profile-form');
export const formPlaceContainer = document.querySelector('.popup__place-form');
export const formAvatarContainer = document.querySelector('.popup__avatar-form');
export const popupSubmitDelete = document.querySelector('.popup_sure');
export const nameProfile = document.querySelector('.profile__user-name');
export const jobProfile = document.querySelector('.profile__user-info');
export const nameInput = document.querySelector('.popup__item_name_input');
export const jobInput = document.querySelector('.popup__item_job_input');
export const buttonAdd = document.querySelector('.profile__add-button');
export const namePlaceInput = document.querySelector('.popup__item_title_input');
export const linkPlaceInput = document.querySelector('.popup__item_place_input');
export const cardListSelector = '.elements';
export const buttonEditAvatar = document.querySelector('.profile__edit-avatar');
export const profileAvatar = document.querySelector('.profile__avatar');

const validationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__item',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__span_active'
};

export { validationSettings };