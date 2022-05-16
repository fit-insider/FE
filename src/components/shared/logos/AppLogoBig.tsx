import React from 'react';
import {
    LogoWrapper,
    Logo
} from './StyledComponents';


const AppLogoBig = () => {
    return (
        <LogoWrapper>
            <Logo src={require('../../../assets/images/logo.svg')} alt='logo' />
        </LogoWrapper>
    );
};

export default AppLogoBig;