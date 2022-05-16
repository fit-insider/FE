import React, { useContext, useState } from 'react';
import AppLogoBig from '../../shared/logos/AppLogoBig';
import Dropdown from './Dropdown';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavGroup,
  NavBtnGroup,
  AccountImage,
  NavbarAccountControls,
  AccountNameLabel
} from './StyledComponents';
import Button from '../../shared/buttons/Button';
import colors from '../../shared/theme/Colors';
import CustomLink from '../../shared/routes/Link';
import useMenuItems from './UseMenuItems';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../context/UserContext';
import Conditional from '../../utils/Conditional';
import Utils from '../../../utils/Utils';
import images from '../../shared/images/Images';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuItems = useMenuItems();
  const { t } = useTranslation();
  const { userId, firstName, handleLogout } = useContext(UserContext);

  const closeMobileNavbar = () => {
    if (window.innerWidth > 768) {
      setDropdownOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', closeMobileNavbar, false);
  }, []);

  return (
    <>
      <Nav>
        <NavGroup>
          <NavLink to='/'>
            <AppLogoBig />
          </NavLink>

          <Dropdown open={dropdownOpen} />

          <NavMenu>
            {menuItems.map((item, index) => {
              return (
                <NavLink key={index} to={item.path}>
                  {item.title}
                </NavLink>
              );
            })}
          </NavMenu>
        </NavGroup>

        <NavBtnGroup>
          <Conditional when={Utils.isNullOrUndefined(userId)}>
            <CustomLink to='/login' color={colors.dark}><Button>{t('LOGIN')}</Button></CustomLink>
            <CustomLink to='/register' color={colors.dark}><Button>{t('REGISTER')}</Button></CustomLink>
          </Conditional>

          <Conditional when={!Utils.isNullOrUndefined(userId)}>
            <CustomLink to='/account' color={colors.dark}>
              <NavbarAccountControls>
                <AccountImage src={images.account} />
                <AccountNameLabel>{firstName}</AccountNameLabel>
              </NavbarAccountControls>
            </CustomLink>
            <Button onClick={handleLogout}>{t('LOGOUT')}</Button>
          </Conditional>

        </NavBtnGroup>

        <Bars onClick={() => setDropdownOpen(!dropdownOpen)} />
      </Nav>
    </>
  );
};

export default Navbar;