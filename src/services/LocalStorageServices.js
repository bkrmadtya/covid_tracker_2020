const storeDataLocally = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    return null;
  }
};

const getLocalData = (key) => {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  } catch (e) {
    return null;
  }
};

const clearLocalStorage = () => localStorage && localStorage.clear();

export default {
  clearLocalStorage,
  getLocalData,
  storeDataLocally,
};
