(()=>{"use strict";var t=document.querySelector(".profile__edit-button"),e=document.querySelector(".popup_profile"),n=document.querySelector(".popup_addplace"),r=document.querySelector(".popup_large-img"),o=(e.querySelector(".popup__close"),n.querySelector(".popup__close"),r.querySelector(".popup__close"),document.forms.profileform),i=document.forms.placeform,u=document.forms.avatarform,c=(document.querySelector(".popup_sure"),document.querySelector(".profile__user-name"),document.querySelector(".profile__user-info"),document.querySelector(".popup__item_name_input"),document.querySelector(".popup__item_job_input"),document.querySelector(".profile__add-button")),a=(document.querySelector(".popup__item_title_input"),document.querySelector(".popup__item_place_input"),document.querySelector(".profile__edit-avatar")),l=(document.querySelector(".profile__avatar"),{formSelector:".popup__form",inputSelector:".popup__item",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__span_active"});function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function t(e,n,r,o){var i=o.handleOpenPopup,u=o.sendIdCard,c=o.likeCard,a=o.dislikeCard;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._userId=n,this._templateSelector=r,this._handleOpenPopup=i,this._sendIdCard=u,this._item=e,this._id=e._id,this._likeCard=c,this._dislikeCard=a,this._arrayCardLikes=e.likes}var e,n;return e=t,(n=[{key:"_setEventListeners",value:function(){var t=this;this._like.addEventListener("click",(function(){t._handleLikeCard()})),this._remove.addEventListener("click",(function(){t._sendIdCard(t._id)})),this._bigImage.addEventListener("click",(function(){t._handleOpenPopup(t._name,t._link)}))}},{key:"_handleLikeCard",value:function(){this.isLiked?this._dislikeCard(this._id):this._likeCard(this._id)}},{key:"likeButton",value:function(){this.isLiked=!0,this._like.classList.add("element_liked")}},{key:"dislikeButton",value:function(){this.isLiked=!1,this._like.classList.remove("element_liked")}},{key:"countLike",value:function(t){this._amountLike.textContent=t}},{key:"_showMyLike",value:function(){var t=this;this._arrayCardLikes.some((function(e){return e._id==t._userId}))?this.likeButton():this.dislikeButton()}},{key:"handleDeleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_showBasket",value:function(){this._item.owner._id===this._userId?this._remove.style.display="block":this._remove.style.display="none"}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._like=this._element.querySelector(".element__like"),this._remove=this._element.querySelector(".element__delete"),this._bigImage=this._element.querySelector(".element__image"),this._title=this._element.querySelector(".element__title"),this._amountLike=this._element.querySelector(".element__likes-count"),this._title.textContent=this._name,this._bigImage.src=this._link,this._bigImage.alt=this._name,this._amountLike.textContent=this._arrayCardLikes.length,this._setEventListeners(),this._showMyLike(),this._showBasket(),this._element}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const y=p;function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,m(r.key),r)}}function m(t){var e=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===h(e)?e:String(e)}var _=function(){function t(e,n){var r,o,i,u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=function(){u._setEventListeners()},(o=m(o="enableValidation"))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,this._validationsettings=e,this._form=n,this._buttonElement=this._form.querySelector(e.submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._validationsettings.inputSelector))}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){this._errorElement=this._form.querySelector(".".concat(t.id,"-error")),t.classList.add(this._validationsettings.inputErrorClass),this._errorElement.textContent=e,this._errorElement.classList.add(this._validationsettings.errorClass)}},{key:"_hideInputError",value:function(t){this._errorElement=this._form.querySelector(".".concat(t.id,"-error")),t.classList.remove(this._validationsettings.inputErrorClass),this._errorElement.classList.remove(this._validationsettings.errorClass),this._errorElement.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_disableSubmitButton",value:function(){this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._validationsettings.inactiveButtonClass)}},{key:"_enableSubmitButton",value:function(){this._buttonElement.removeAttribute("disabled",!1),this._buttonElement.classList.remove(this._validationsettings.inactiveButtonClass)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()})),t._form.addEventListener("reset",(function(){setTimeout((function(){t._toggleButtonState()}))}))}))}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();const v=_;function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}const k=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){e._renderer(t)}))}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}const E=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_closePopupOverlay",value:function(t){t.target.classList.contains("popup_opened")&&this.close(t.target)}},{key:"setEventListeners",value:function(){var t=this;this._popup.querySelector(".popup__close").addEventListener("click",(function(){return t.close()})),this._popup.addEventListener("mousedown",(function(e){return t._closePopupOverlay(e)}))}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=C(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},P.apply(this,arguments)}function C(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function T(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}const B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(r);if(o){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return T(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup__image"),e._title=e._popup.querySelector(".popup__caption"),e}return e=u,(n=[{key:"open",value:function(t,e){P(I(u.prototype),"open",this).call(this),this._title.textContent=t,this._image.src=e,this._image.alt=t}},{key:"close",value:function(){this._title.textContent="",this._image.src="",this._image.alt="",P(I(u.prototype),"close",this).call(this)}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(E);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=D(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},R.apply(this,arguments)}function D(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function U(t,e){if(e&&("object"===q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}const F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(r);if(o){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return U(this,t)});function u(t,e){var n,r=e.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitForm=r,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__item"),n._button=n._popup.querySelector(".popup__button"),n._buttonText=n._button.textContent,n}return e=u,n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"changeBtnText",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._button.textContent=t?e:this._buttonText}},{key:"setEventListeners",value:function(){var t=this;R(V(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitForm(t._getInputValues())}))}},{key:"close",value:function(){R(V(u.prototype),"close",this).call(this),this._form.reset()}}],n&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(E);function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==M(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===M(o)?o:String(o)),r)}var o}const J=function(){function t(e){var n=e.name,r=e.job,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._userInfoServer={name:this._name.textContent,about:this._job.textContent},this._userInfoServer}},{key:"setUserProfile",value:function(t){var e=t.name,n=t.about;this._name.textContent=e,this._job.textContent=n}},{key:"setUserAvatar",value:function(t){var e=t.avatar;this._avatar.src=e}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==H(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==H(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===H(o)?o:String(o)),r)}var o}const G=function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._headers=r}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"createCard",value:function(t){return fetch("".concat(this._url,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify(t)}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{headers:this._headers,method:"DELETE"}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers,method:"GET"}).then(this._checkResponse)}},{key:"changeUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify(t)}).then(this._checkResponse)}},{key:"changeAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify(t)}).then(this._checkResponse)}},{key:"likeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"//likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"dislikeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DeLETE",headers:this._headers}).then(this._checkResponse)}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function $(t){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$(t)}function K(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==$(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===$(o)?o:String(o)),r)}var o}function Q(){return Q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=W(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},Q.apply(this,arguments)}function W(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Z(t)););return t}function X(t,e){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},X(t,e)}function Y(t,e){if(e&&("object"===$(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function Z(t){return Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Z(t)}const tt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&X(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Z(r);if(o){var n=Z(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return Y(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._submitDeleteBtn=e._popup.querySelector(".popup__button"),e._buttonText=e._submitDeleteBtn.textContent,e}return e=u,n=[{key:"setId",value:function(t){this.idCardDelete=t}},{key:"callBackDeleteCard",value:function(t){this._callBackDeleteCard=t}},{key:"changeBtnText",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Удаление...";this._submitDeleteBtn.textContent=t?e:this._buttonText}},{key:"setEventListeners",value:function(){var t=this;Q(Z(u.prototype),"setEventListeners",this).call(this),this._submitDeleteBtn.addEventListener("click",(function(){t._callBackDeleteCard()}))}}],n&&K(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(E);function et(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var nt=new k({renderer:function(t){return nt.addItem(rt(t,".additional_card"))}},".elements");function rt(t,e){var n=new y(t,st,e,{handleOpenPopup:function(t,e){it.open(t,e)},sendIdCard:function(t){ot.open(),ot.setId(t),ot.callBackDeleteCard((function(){ot.changeBtnText(!0),ft.deleteCard(t).then((function(){n.handleDeleteCard()})).then((function(){return ot.close()})).catch((function(t){console.log("Ошибка: ".concat(t,"."))})).finally((function(){ot.changeBtnText(!1),ot.close()}))}))},likeCard:function(t){ft.likeCard(t).then((function(t){n.likeButton(),n.countLike(t.likes.length)})).catch((function(t){console.log("Ошибка: ".concat(t,"."))}))},dislikeCard:function(t){ft.dislikeCard(t).then((function(t){n.dislikeButton(),n.countLike(t.likes.length)})).catch((function(t){console.log("Ошибка: ".concat(t,"."))}))}});return n.generateCard()}var ot=new tt(".popup_sure");ot.setEventListeners();var it=new B(".popup_large-img");it.setEventListeners(),it.close();var ut=new J({name:".profile__user-name",job:".profile__user-info",avatar:".profile__avatar"}),ct=new F(".popup_profile",{submitForm:function(t){return ct.changeBtnText(!0),ft.changeUserInfo(t).then((function(t){ut.setUserProfile(t)})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){ct.changeBtnText(!1),ct.close()}))}});ct.setEventListeners(),t.addEventListener("click",(function(){ct.open();var t=ut.getUserInfo();ct.setInputValues(t)}));var at=new F(".popup_addplace",{submitForm:function(t){var e,n,r=t.inputplacename,o=t.inputplacelink;at.changeBtnText(!0),(e=r,n=o,ft.createCard({name:e,link:n})).then((function(t){nt.addItem(rt(t,".additional_card"))})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){at.changeBtnText(!1),at.close()}))}});at.setEventListeners(),c.addEventListener("click",(function(){at.open()}));var lt=new F(".popup_avatar",{submitForm:function(t){return lt.changeBtnText(!0),ft.changeAvatar(t).then((function(t){ut.setUserAvatar(t)})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){lt.changeBtnText(!1),lt.close()}))}});lt.setEventListeners(),a.addEventListener("click",(function(){lt.open()})),new v(l,i).enableValidation(),new v(l,o).enableValidation(),new v(l,u).enableValidation();var st,ft=new G({url:"https://mesto.nomoreparties.co/v1/cohort-58",headers:{authorization:"45d022b9-9c09-4bab-9547-37af2b0af73d","Content-Type":"application/json"}});Promise.all([ft.getUserInfo(),ft.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);a=!0);}catch(t){l=!0,o=t}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return et(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?et(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];nt.renderItems(i),ut.setUserProfile(o),ut.setUserAvatar(o),st=o._id})).catch((function(t){console.log("Ошибка: ".concat(t,"."))}))})();