export function setItem(key, value) {
  window.localStorage.setItem(key, value);
}

export function getItem(key) {
  return window.localStorage.getItem(key) || null;
}

export function removeItem(key) {
  return window.localStorage.removeItem(key);
}
