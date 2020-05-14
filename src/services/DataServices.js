import axios from 'axios';

// TODO:: REMOVE TRY CATCH AND HANDLE ERROR SEPARATELY IN REDUX ACTIONS

/**
 * @api {getGlobalData} ==> get limited data for all countries, used in MAP
 * @api {getDataByCountry} ==> get more specific data for selected country *
 * **/

const getGlobalData = async () => {
  const response = await axios.get('https://corona.lmao.ninja/v2/countries');
  return response.data;
};

const getDataByCountry = async (country) => {
  const path = country === 'Global' ? 'all' : `countries/${country}`;
  const response = await axios.get(`https://corona.lmao.ninja/v2/${path}`);
  return response.data;
};

const getGlobalTrendData = async () => {
  const response = await axios.get(
    'https://corona.lmao.ninja/v2/historical/all?lastdays=all'
  );
  return response.data;
};

export default { getDataByCountry, getGlobalData, getGlobalTrendData };
