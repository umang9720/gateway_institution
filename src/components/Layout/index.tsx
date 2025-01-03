import React from 'react';
import Navbar from './Navbar';
import LayoutStyle from './Layout.module.scss';
// import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={LayoutStyle['main-layout']}>
      {/*Navbar */}
      <div className={LayoutStyle['navbar']}>
        <Navbar />
      </div>
      {/* Main Content below Navbar */}
      <div className={LayoutStyle['main-content']}>{children}</div>
      {/* Footer */}
      {/* <div className={LayoutStyle['footer']}>
        <Footer />
      </div> */}
    </div>
  );
};

export default Layout;
