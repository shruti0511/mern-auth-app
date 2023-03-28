import axios from 'axios';
export async function loginService(data) {
    return await axios.post('/api/login', data);
}
export async function signupService(data) {
    return await axios.post('/api/signup', data);
}
export async function userService() {
    return await axios.get('/api/user' );
}
export async function refreshService() {
    return await axios.get('/api/refresh');
}
export async function logoutService() {
    return await axios.post('/api/logout');
}
