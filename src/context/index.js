import React, { createContext, useContext, useReducer } from 'react';
import { initialState as userInitialState } from './reducers/user';
import { initialState as tvShowInitialState } from './reducers/tv-show';
import { combinedReducers as reducer } from './reducers';

const AppContext = createContext({
  user: userInitialState,
  tvShow: tvShowInitialState
});

export default ({ children }) => (
  <AppContext.Provider value={useReducer(reducer, useContext(AppContext))}>
    {children}
  </AppContext.Provider>
);

export const useAppState = () => useContext(AppContext);
