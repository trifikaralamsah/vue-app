export const webStorage = {
  get: (key: string) => JSON.parse(String(localStorage.getItem(key))),
  set: (key: string, value: any) =>
    localStorage.setItem(key, JSON.stringify(value)),
  clear: () => localStorage.clear(),
};
