import React from 'react';
import { NavbarWrapper, Title, imageUrl, SideMenuWrapper, MenuItem } from './NavbarStyle';
import { FaSearch} from 'react-icons/fa'
import { MenuItems } from './MenuItems';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Title src={imageUrl} />
      <SideMenuWrapper>
        {MenuItems.map((item)=>(
          <MenuItem>{item}</MenuItem>
        ))}
        <MenuItem>
          <FaSearch size={24} />
        </MenuItem>
      </SideMenuWrapper>
    </NavbarWrapper>
  )
};

export default Navbar;
