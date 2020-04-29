import React, { useState, useEffect } from 'react';

import DetailCards from 'components/DataPanel/Details/DetailCards';

import DataServices from 'services/DataServices';
import SelectCountry from './SelectCountry';

const DataPanel = () => {
  const [data, setData] = useState({});

  const _fetchData = async () => {
    const data = await DataServices.getDataByCountry();
    setData(data);
  };

  useEffect(() => {
    _fetchData();
  }, []);

  return (
    <>
      <SelectCountry />
      <DetailCards data={data} />
    </>
  );
};

export default DataPanel;
