import fetch from '@/libs/fetch';

export function login(nickname, password) {
  return fetch.post('/login', {
    nickname,
    password
  });
}

export function getUser() {
  return fetch.post('/customer/getInfo');
}
