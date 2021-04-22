import React, { useReducer } from "react";

import AppContext from "./AppContext";

import AppReducer from "./AppReducer";

import { SET_APP_DATE, GET_SELECTED_DATE } from "./AppTypes";

const AppState = ({ children }) => {
  const initialState = {
    date: new Date(),
    loading: true,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setAppDate = (payload) => {
    dispatch({ type: SET_APP_DATE, payload });
  };

  const { date, loading } = state;

  return (
    <AppContext.Provider
      value={{
        date,
        loading,
        setAppDate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
