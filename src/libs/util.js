export function fileExt(path) {
  if (path && path.split) {
    const arr = path.split('.');
    if (arr.length > 1) {
      return '.' + arr[arr.length - 1];
    }
  }
  return '';
}
