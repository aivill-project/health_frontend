import React from 'react';
import { HeaderContainer, HeaderTitle } from './Header.styles';
import BackButton from './BackButton';
import PageTitle from './PageTitle';

const Header = ({ title, showBackButton = true }) => {
  return (
    <HeaderContainer>
      {showBackButton && <BackButton />}
      <PageTitle title={title} />
    </HeaderContainer>
  );
};

export default Header;