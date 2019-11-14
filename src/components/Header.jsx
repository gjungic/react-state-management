import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import logo from '../logo.svg';
import { useAppState } from '../context';
import { logInUserSuccess, logOutUser } from '../context/actions/user';

const Header = () => {
  const [
    { user: { loggedIn, currentUser } },
    dispatch
  ] = useAppState();
  const logIn = () => {
    // mock user fetching
    setTimeout(() => {
      const userDataFromNetwork = {
        firstName: 'John',
        lastName: 'Doe',
        age: 31
      };
      dispatch(logInUserSuccess(userDataFromNetwork));
    }, 1200);
  };
  const logOut = () => {
    dispatch(logOutUser());
  };

  return (
    <StyledWrapper>
      <div>
        <Link to="/">
          <img src={logo} className="app-logo" alt="logo" />
        </Link>
      </div>
      {loggedIn &&
      <div>
        <Link to="/profile" className="nav-item">
          <p>{`${currentUser.firstName} ${currentUser.lastName}`}</p>
        </Link>
        <button onClick={logOut}>Log Out</button>
      </div>
      }
      {!loggedIn &&
      <button onClick={logIn}>Log In</button>
      }
    </StyledWrapper>
  );
};

const StyledWrapper = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 20px 20px;

    div {
      display: flex;
    }

    p {
      margin-right: 10px;
    }

    .app-logo {
      height: 10vmin;
    }

    .nav-item {
      text-decoration: none;
      margin: 10px;
      color: #09d3ac;
    }
`;

export default Header;