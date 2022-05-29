import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../shared/theme/Colors';

export const Nav = styled.nav`
  background: ${colors.dark};
  height: 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;

  @media screen and (max-width: 768px) {
    height: 60px;
    min-height: 60px;
  }
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    max-height: 500px;
  }
`;

export const NavLink = styled(Link)`
  color: ${colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase; 
  white-space: nowrap;
  font-size: 16px;
  transition: .2s;

  &.active {
    color: ${colors.primary};
  }

  &:hover {
    font-size: 18px;
    text-shadow: 0px 5px 15px ${colors.primary};
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: ${colors.white};

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 24px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnGroup = styled(NavGroup)`
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarAccountControls = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
  max-width: 200px;
  transition: .2s;

  &:hover {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AccountNameLabel = styled.p`
  color: ${colors.white};
  width: 100%;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const AccountImage = styled.img`
  width: 30px;
  margin: 5px;
`;

// ----------- Dropdown ----------- //
export const StyledDropdown = styled.div`
  position: absolute;
  top: 76px;
  margin: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .5s;
  z-index: 999;
  height: ${({ title }) => title === 'navDropdown' ? '100%' : '0'};
`;