
export const login = () => {
    localStorage.setItem('token', 'TestLogin');
}

export const logout = () => {
    localStorage.removeItem('token');
}
