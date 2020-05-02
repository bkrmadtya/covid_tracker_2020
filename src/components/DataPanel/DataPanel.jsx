import React from 'react';

import DetailCards from 'components/DataPanel/Details/DetailCards';

import SelectCountry from './SelectCountry';

const DataPanel = () => {
  return (
    <>
      <SelectCountry />
      <DetailCards />
    </>
  );
};

export default DataPanel;
