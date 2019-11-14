import React from 'react';
import { Router } from '@reach/router';
import AppStateProvider from './context';
import Header from './components/Header';
import UserProfile from './pages/UserProfile';
import TvShows from './pages/TvShows';

const App = () => (
  <AppStateProvider>
    <Header />
    <Router>
      <TvShows path="/" />
      <UserProfile path="/profile" />
    </Router>
  </AppStateProvider>
);

export default App;
