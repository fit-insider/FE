import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Utils from '../../../utils/Utils';
import { UserContext } from '../../context/UserContext';
import Button from '../../shared/buttons/Button';
import images from '../../shared/images/Images';
import CustomLink from '../../shared/routes/Link';
import colors from '../../shared/theme/Colors';
import Conditional from '../../utils/Conditional';
import { AccountImage, AccountNameLabel, NavbarAccountControls, NavGroup, NavLink, StyledDropdown } from './StyledComponents';
import useMenuItems from './UseMenuItems';

const Dropdown = ({ open }) => {
  const { t } = useTranslation();
  const menuItems = useMenuItems();
  const { userId, firstName, handleLogout } = useContext(UserContext);

  return (
    <StyledDropdown title={open ? 'navDropdown' : 'navDropdown_hidden'}>
      <Conditional when={open}>
        <NavGroup>
          {menuItems.map((item, index) => {
            return (
              <NavLink key={index} to={item.path}>
                {item.title}
              </NavLink>
            );
          })}

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
        </NavGroup>
      </Conditional>
    </StyledDropdown>
  );
};

export default Dropdown;