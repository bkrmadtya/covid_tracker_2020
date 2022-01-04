import axios from 'axios';

/**
 * @api {getGlobalData} ==> get limited data for all countries, used in MAP
 * @api {getDataByCountry} ==> get more specific data for selected country *
 * **/

const baseURL = 'https://disease.sh/v3/covid-19';

const getGlobalData = async () => {
  const response = await axios.get(`${baseURL}/countries`);
  return response.data;
};

const getDataByCountry = async (country) => {
  const path = country === 'Global' ? 'all' : `countries/${country}`;
  const response = await axios.get(`${baseURL}/${path}`);
  return response.data;
};

const getGlobalTrendData = async () => {
  const response = await axios.get(
    `${baseURL}/historical/all?lastdays=all`
  );
  return response.data;
};

export default { getDataByCountry, getGlobalData, getGlobalTrendData };
