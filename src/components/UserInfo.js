class UserInfo {
    constructor({ name, job, avatar }) {
        this._name = document.querySelector(name);
        this._job = document.querySelector(job);
        this._avatar = document.querySelector(avatar);
    }


    //получаю из инпута формы обновления профиля данные и запихиваю их в объект
    getUserInfo() {
        this._userInfoServer = {
            name: this._name.textContent,
            about: this._job.textContent
        };

        return this._userInfoServer;
    }

    setUserProfile({ name, about }) {
        this._name.textContent = name;
        this._job.textContent = about;
    }

    setUserAvatar({ avatar }) {
        this._avatar.src = avatar;
    }
};

export default UserInfo;