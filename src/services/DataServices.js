import axios from 'axios';

const getGlobalData = async () => {
  try {
    const response = await axios.get('https://corona.lmao.ninja/v2/countries');
    return response.data;
  } catch (e) {
    console.log(`Failed to fetch countries: ${e.message}`, e);
    return;
  }
};

const getDataByCountry = async (country) => {
  try {
    const response = await axios.get('https://corona.lmao.ninja/v2/all');
    return response.data;
  } catch (e) {
    console.log(`Failed to fetch data for ${country}: ${e.message}`, e);
    return;
  }
};

const getWeeklyData = async () => {
  try {
    const response = await axios.get(
      'https://corona.lmao.ninja/v2/historical/all?lastdays=all'
    );
    return response.data;
  } catch (e) {
    console.log(`Failed to fetch weekly data: ${e.message}`, e);
    return;
  }
};

export default { getGlobalData, getWeeklyData, getDataByCountry };
