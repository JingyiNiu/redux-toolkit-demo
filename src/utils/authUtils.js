export const authKey = 'auth_test';

export const setAuth = () => {
    localStorage.setItem(authKey, 'true');
};

export const getAuth = () => {
    const auth = localStorage.getItem(authKey);
    if (auth) {
        return true;
    } else {
        return false;
    }
};

export const removeAuth = () => {
    localStorage.removeItem(authKey);
};
