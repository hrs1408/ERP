import React from 'react';
import './header.scss';
import { IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import { IoMenuSharp, IoNotifications } from 'react-icons/io5';
import { HiSpeakerWave } from 'react-icons/hi2';
import { IoMdPrint } from 'react-icons/io';
import { CgMenuGridO } from 'react-icons/cg';
import { ACCOUNT_DROPDOWN } from '@/constants/AccountDropdown';
import { RxReset } from 'react-icons/rx';

interface IProps {}

const Header: React.FC<IProps> = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className={'header'}>
      <div className={'header-side block lg:hidden'}>
        <HeaderMenuItem icon={<IoMenuSharp size={20} />} />
      </div>
      <div className={'header-menu'}>
        <HeaderMenuItem icon={<HiSpeakerWave size={20} />} />
        <HeaderMenuItem icon={<IoNotifications size={20} />} />
        <HeaderMenuItem icon={<RxReset size={20} />} />
        <HeaderMenuItem icon={<IoMdPrint size={20} />} />
        <button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          className={'button-menu'}
        >
          <span className={'hidden text-sm sm:block'}>
            Nguyễn Phan Huy Hiếu
          </span>
          <CgMenuGridO />
        </button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
        >
          {ACCOUNT_DROPDOWN.map((item, index) => {
            return (
              <MenuItem key={index} onClick={handleClose}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {item.label}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    </header>
  );
};

type HeaderMenuItemProps = {
  icon: React.ReactElement;
};

const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({ icon }) => {
  return (
    <div className={'group rounded-full border'}>
      <IconButton
        className={
          'transition-all duration-300 ease-in-out group-hover:text-primary-light'
        }
      >
        {icon}
      </IconButton>
    </div>
  );
};

export default Header;
