import React, { FC, useEffect, useState } from 'react';
import { Outlet } from '@tanstack/react-location';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

type RootLayoutProps = {};

const RootLayout: FC<RootLayoutProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const [lageScreen, setLageScreen] = useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setLageScreen(true);
      } else {
        setLageScreen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <section className={'flex min-h-screen bg-bg-primary'}>
      <div className="sidebar-left hidden lg:block">
        <Sidebar clickOpen={handleDrawer} />
      </div>
      <div
        className={`${
          lageScreen ? (open ? 'ml-[300px]' : 'ml-[70px]') : 'w-full'
        } main-content flex min-h-screen w-full flex-col gap-2 p-4`}
      >
        <Header />
        <Outlet />
        <div className={'copyright mt-2 flex items-center justify-center'}>
          <p>© {new Date().getFullYear()} POSVN. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default RootLayout;
