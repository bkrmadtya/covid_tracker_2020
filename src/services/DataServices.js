import axios from 'axios';

// TODO:: REMOVE TRY CATCH AND HANDLE ERROR SEPARATELY IN REDUX ACTIONS

/**
 * @function {getGlobalData} ==> get limited data for all countries, used in MAP
 * @function {getDataByCountry} ==> get more specific data for selected country
 *
 * **/

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
  const path = country === 'Global' ? 'all' : `countries/${country}`;

  try {
    const response = await axios.get(`https://corona.lmao.ninja/v2/${path}`);
    console.log(response.data);
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
