import './sidebar.scss';
import { IconButton, Tooltip } from '@mui/material';
import { BsArrowRightShort } from 'react-icons/bs';
import React, { ReactElement, useEffect, useState } from 'react';
import { Link } from '@tanstack/react-location';
import { SIDE_BAR_MENU } from '@/constants/SidebarMenu';

interface IProps {
  clickOpen: (open: boolean) => void;
}
const Sidebar: React.FC<IProps> = ({ clickOpen }) => {
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    setOpen(!open);
    clickOpen(open);
  };

  return (
    <aside className={`sidebar ${open ? 'w-[300px]' : 'w-[70px]'}`}>
      <div className={'flex w-full flex-col items-center gap-2'}>
        <div className={'sidebar-logo'}>
          <img src="/images/logo.png" alt="" />
          <p className={`${open ? 'opacity-1' : 'opacity-0'} site-name`}>
            POSVN
          </p>
        </div>
        <div className={'sidebar-menu'}>
          {SIDE_BAR_MENU.map((item, index) => (
            <SidebarMenuItem
              icon={item.icon}
              title={item.label}
              path={item.path}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className={'sidebar-button mb-2'}>
        <IconButton onClick={handleDrawer}>
          <BsArrowRightShort
            size={30}
            className={`${
              open ? '-rotate-180' : ''
            } transition-all duration-300 ease-in-out`}
          />
        </IconButton>
      </div>
    </aside>
  );
};

type SidebarMenuItemProps = {
  icon: ReactElement;
  title: string;
  path: string;
};

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  icon,
  title,
  path,
}) => {
  return (
    <Tooltip title={title}>
      <Link to={path} className={'sidebar-menu-item'}>
        <div className={'-ml-[1px]'}>{icon}</div>
        <div className={`ml-2 whitespace-nowrap`}>{title}</div>
      </Link>
    </Tooltip>
  );
};
export default Sidebar;
