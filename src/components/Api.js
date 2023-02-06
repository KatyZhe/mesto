//const { get } = require("core-js/core/dict");

class Api {
    constructor({ url, headers }) {
      this._url = url;
      this._headers = headers;
    }

    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getInitialCards() {
      return fetch(`${this._url}/cards`, {
      headers: this._headers
      })
      .then(this._checkResponse);
    }

    createCard(data) {
      return fetch(`${this._url}/cards`, {
          headers: this._headers,
          method: 'POST',
          body: JSON.stringify(data)
      })
      .then(this._checkResponse);
    }

    deleteCard(id) {
      return fetch(`${this._url}/cards/${id}`, {
          headers: this._headers,
          method: 'DELETE',
      })
      .then(this._checkResponse);
    }

    getUserInfo() {
      return fetch(`${this._url}/users/me`, {
        headers: this._headers,
        method: 'GET'
      })
      .then(this._checkResponse);
    }

    changeUserInfo(data) {
      return fetch(`${this._url}/users/me`, {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify(data)
      })
      .then(this._checkResponse);
    }

    changeAvatar(data) {
      return fetch(`${this._url}/users/me/avatar`, {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify(data)
      })
      .then(this._checkResponse);
    }

    likeCard(id) {
      return fetch(`${this._url}/cards/${id}//likes`, {
        method: 'PUT',
        headers: this._headers,
      })
      .then(this._checkResponse);
    }
  
    dislikeCard(id) {
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: 'DeLETE',
        headers: this._headers,
      })
      .then(this._checkResponse);
    }
}
  
export default Api;