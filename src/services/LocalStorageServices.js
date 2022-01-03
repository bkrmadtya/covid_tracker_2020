const LAST_UPDATE_TIME = 'LAST_UPDATE_TIME';

const storeDataLocally = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    localStorage.setItem(LAST_UPDATE_TIME, JSON.stringify(Date.now()));
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

const getLastUpdateTime = () => {
  return getLocalData(LAST_UPDATE_TIME);
}

const clearLocalStorage = () => localStorage && localStorage.clear();

export default {
  clearLocalStorage,
  getLocalData,
  storeDataLocally,
  getLastUpdateTime,
};
