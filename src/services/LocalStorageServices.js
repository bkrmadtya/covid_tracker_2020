const storeDataLocally = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getLocalData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const clearLocalStorage = () => localStorage.clear();

export default {
  clearLocalStorage,
  getLocalData,
  storeDataLocally,
};
