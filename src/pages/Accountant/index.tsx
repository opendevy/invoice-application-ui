import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AllHistories from "../../components/modules/Accountant/AllHistories";
import DetailHistories from "../../components/modules/Accountant/DetailHistories";

const Accountant = () => {
  const [value, setValue] = useState('all');
  
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  
  const renderContent = () => {
    switch (value) {
      case 'all':
        return <AllHistories />
      case 'detail':
        return <DetailHistories />
    }
  };
  
  return (
    <div>
      <h2 className="font-bold text-4xl">
        History
      </h2>
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          centered
        >
          <Tab value="all" label="All Histories" />
          <Tab value="detail" label="Detail Histories" />
        </Tabs>
        {renderContent()}
      </div>
    </div>
  );
};

export default Accountant;
