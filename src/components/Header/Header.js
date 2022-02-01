import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import icon from '../../assets/Icon.png';
import Hamburger from './Hamburger/Hamburger';
import { StyledHeader, StyledIcon, StyledName } from './Header.styles';
import Navigation from './Navigation/Navigation';

const Header = () => {
  const [active, setActive] = useState(false);

  const showNav = () => setActive((active) => !active);
  const location = useLocation();

  useEffect(() => {
    setActive(false);
  }, [location]);

  return (
    <Link to={'/'}>
      <StyledHeader>
        <StyledIcon src={icon} />
        <StyledName>Scrooge</StyledName>
        <Hamburger onShowNav={showNav} menuActive={active} />
        {active ? <Navigation /> : null}
      </StyledHeader>
    </Link>
  );
};

export default Header;
