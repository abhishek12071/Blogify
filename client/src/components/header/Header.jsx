import {AppBar, Toolbar, styled} from '@mui/material';

import {Link} from 'react-router-dom';

const Component = styled(AppBar)`
  background: linear-gradient(to right, #17263c, #394867);
  color: #fff;
`;

const Container = styled(Toolbar)`
  justify-content: center;

  & > a {
    padding: 20px;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: transparent;
      transition: background-color 0.3s ease;
    }

    &:hover {
      color: #3d7eff;

      &:before {
        background-color: #ff847c;
      }
    }

    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: transparent;
      transition: background-color 0.3s ease;
    }

    &:hover:after {
      background-color: #3d7eff;
    }
  }
`;

const Header = () => {
  return (
    <Component>
      <Container>
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/contact'>CONTACT</Link>
        <Link to='/login'>LOGOUT</Link>
      </Container>
    </Component>
  );
};

export default Header;