const arr = [2, 2, 3, 4];
const all = (arr, fn = Boolean) => arr.every(fn);
const any = (arr, fn = Boolean) => arr.some(fn);
all(arr, x => x > 1); // true
any(arr, x => x > 3); // true