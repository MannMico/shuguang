import fetch from '@/libs/fetch';

export function sendCodeSms({ phone }) {
  return fetch.post('/code/sendCodeSms', { phone });
}
