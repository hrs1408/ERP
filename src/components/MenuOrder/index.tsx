import React from 'react';
import { Tab, Tabs } from '@mui/material';
import { BiDish } from 'react-icons/bi';
import { FaGlassMartiniAlt } from 'react-icons/fa';
import { RiMenu4Fill } from 'react-icons/ri';
import DishItem from '@/components/DishItem';

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
      className={' h-full w-full'}
    >
      {value === index && (
        <div
          className={
            'grid h-[84%] w-full grid-cols-2 gap-4 overflow-y-auto md:grid-cols-3 2xl:grid-cols-4'
          }
        >
          {children}
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

const MenuOrder = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={'mt-4 h-full w-full'}>
      <div>
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
          {Category.map((item, index) => {
            return (
              <Tab
                label={item.name}
                {...a11yProps(index)}
                icon={<item.icon size={22} />}
                iconPosition="start"
                sx={{
                  minHeight: '0px',
                  '&. hover': {
                    color: '#1795A8',
                  },
                  '&.Mui-selected': {
                    color: '#1795A8',
                    border: '1px solid #1795A8',
                    borderRadius: '8px',
                  },
                }}
              />
            );
          })}
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        {[...Array(20)].map((item, index) => {
          return (
            <DishItem
              image={
                'https://cachlamheo.com/wp-content/uploads/2016/11/hamburger-thit-heo-nuong.jpg'
              }
              name={'Hamburger'}
              price={49000}
              key={index}
              weight={'200g'}
              description={'Burger bò xay, phô mai, rau củ, sốt mayonnaise'}
            />
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
};

const Category = [
  {
    id: 1,
    name: 'Món chính',
    icon: BiDish,
  },
  {
    id: 2,
    name: 'Thức uống',
    icon: FaGlassMartiniAlt,
  },
  {
    id: 3,
    name: 'Khác',
    icon: RiMenu4Fill,
  },
];
export default MenuOrder;
