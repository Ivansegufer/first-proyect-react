import React from 'react';
import LogoMenu from '../atoms/LogoMenu';
import NavMenu from '../atoms/NavMenu';
import ToogleMenu from '../atoms/ToogleMenu';

const MainMenu = () => (
    <header className="main-header">
      <div className="ed-grid s-grid-5 lg-grid-4">
        <LogoMenu />
        <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
          <NavMenu />
          <ToogleMenu />
        </div>
      </div>
    </header>
)

export default MainMenu;