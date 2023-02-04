//const { get } = require("core-js/core/dict");

class Api {
    constructor({ url, headers }) {
      this._url = url;
      this._headers = headers;
    }
  
    getInitialCards() {
      return fetch(`${this._url}/cards`, {
      headers: this._headers
      })
      .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
      });
    }

    createCard(data) {
      return fetch(`${this._url}/cards`, {
          headers: this._headers,
          method: 'POST',
          body: JSON.stringify(data)
      })
      .then((res) => {
          if(res.ok) {
              return res.json()
          }
      });
    }

    deleteCard(id) {
      return fetch(`${this._url}/cards/${id}`, {
          headers: this._headers,
          method: 'DELETE',
      })
      .then((res) => {
          if(res.ok) {
            return res.json();
          }
      });
    }

    getUserInfo() {
      return fetch(`${this._url}/users/me`, {
        headers: this._headers,
        method: 'GET'
      }).then((res) => {
        if(res.ok) {
          return res.json();
        }
      })
    }

    changeUserInfo(data) {
      return fetch(`${this._url}/users/me`, {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify(data)
      }).then((res) => {
        if(res.ok) {
          return res.json();
        }
      })
    }

    changeAvatar(data) {
      return fetch(`${this._url}/users/me/avatar`, {
        headers: this._headers,
        method: 'PATCH',
        body: JSON.stringify(data)
      }).then((res) => {
        if(res.ok) {
          return res.json();
        }
      })
    }

    likeCard(id) {
      return fetch(`${this._url}/cards/${id}//likes`, {
        method: 'PUT',
        headers: this._headers,
      }).then((result) => {
        if (result.ok) {
          return result.json();
        }
      });
    }
  
    dislikeCard(id) {
      return fetch(`${this._url}/cards/${id}/likes`, {
        method: 'DeLETE',
        headers: this._headers,
      }).then((result) => {
        if (result.ok) {
          return result.json();
        }
      });
    }
}
  
export default Api;