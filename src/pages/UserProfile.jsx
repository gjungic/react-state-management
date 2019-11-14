import React from 'react';
import styled from 'styled-components';
import { useAppState } from '../context';

const UserProfile = () => {
  const [{ user }] = useAppState();
  const {
    currentUser: { firstName, lastName, age },
    loggedIn
  } = user;

  if (!loggedIn) return null;

  return (
    <StyledWrapper>
      <h1>User Data</h1>
      <div>First name: {firstName}</div>
      <div>Last name: {lastName}</div>
      <div>Age: {age}</div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 30px;
`;

export default UserProfile;