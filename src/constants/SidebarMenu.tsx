import {
  BiCalendarAlt,
  BiCategoryAlt,
  BiChart,
  BiHomeAlt2,
} from 'react-icons/bi';
import { AiOutlineSetting } from 'react-icons/all';

export const SIDE_BAR_MENU = [
  {
    label: 'Trang chủ',
    icon: <BiHomeAlt2 size={24} />,
    path: '/',
  },
  {
    label: 'Thu ngân',
    icon: <BiCategoryAlt size={24} />,
    path: '/cashier',
  },
  {
    label: 'Lễ tân',
    icon: <BiCalendarAlt size={24} />,
    path: '/cashier',
  },
  {
    label: 'Báo cáo',
    icon: <BiChart size={24} />,
    path: '/cashier',
  },
  {
    label: 'Cài đặt',
    icon: <AiOutlineSetting size={24} />,
    path: '/cashier',
  },
];
