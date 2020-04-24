import axios from 'axios';

const getGlobalData = async () => {
  try {
    const response = await axios.get('https://corona.lmao.ninja/v2/countries');
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(`Fiale to fetch countries: ${e.message}`, e);
    return;
  }
};

const getWeeklyData = async () => {
  try {
    const response = await axios.get(
      'https://corona.lmao.ninja/v2/historical/all?lastdays=7'
    );
    // console.log(response);
    return response.data;
  } catch (e) {
    console.log(`Failed to fetch weekly data: ${e.message}`, e);
    return;
  }
};

export default { getGlobalData, getWeeklyData };
