import { Tab, Tabs } from '@mui/material';
import './cashier.scss';
import React from 'react';
import SearchInput from '@/components/SearchInput';
import CashierTableTab from '@/components/CashierTableTab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className={'p-3'}>
          <div className={'flex flex-col'}>{children}</div>
        </div>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Cashier = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={'cashier'}>
      <div className={'flex h-full w-full flex-col'}>
        <div className={'flex flex-wrap justify-between'}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              '& .MuiTabs-indicator': {
                display: 'none',
              },
            }}
          >
            <Tab
              label="Tất cả"
              {...a11yProps(0)}
              sx={{
                minHeight: '0px',
                '&.Mui-selected': {
                  color: '#fff',
                  backgroundColor: '#1795A8',
                  borderRadius: '8px',
                },
              }}
            />
            <Tab
              label="Lầu 1"
              {...a11yProps(1)}
              sx={{
                minHeight: '0px',
                '&.Mui-selected': {
                  color: '#fff',
                  backgroundColor: '#1795A8',
                  borderRadius: '8px',
                },
              }}
            />
            <Tab
              label="Lầu 2"
              {...a11yProps(2)}
              sx={{
                minHeight: '0px',
                '&.Mui-selected': {
                  color: '#fff',
                  backgroundColor: '#1795A8',
                  borderRadius: '8px',
                },
              }}
            />
          </Tabs>
          <SearchInput />
        </div>
        <TabPanel value={value} index={0}>
          <CashierTableTab />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CashierTableTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CashierTableTab />
        </TabPanel>
      </div>
    </div>
  );
};

export default Cashier;
