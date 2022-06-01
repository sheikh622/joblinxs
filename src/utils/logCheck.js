
export const login = () => {
    localStorage.setItem('token', 'TestLogin');
}

export const logout = () => {
    localStorage.removeItem('token');
}

export const isLogin = () => {
    if (localStorage.getItem('token')) {
        return true;
    }

    return true;
}