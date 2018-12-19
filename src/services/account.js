import fetch from '@/libs/fetch';

export function login(nickname, password) {
  return fetch.post('/login', {
    nickname,
    password
  });
}
