import React, { useReducer } from "react";

import AppContext from "./AppContext";

import AppReducer from "./AppReducer";

import { SET_APP_DATE, GET_MENU_DATA } from "./AppTypes";

const AppState = ({ children }) => {
  const initialState = {
    date: new Date(),
    menu: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setAppDate = (payload) => {
    dispatch({ type: SET_APP_DATE, payload });
  };

  const getMenuData = async () => {
    try {
      const menuData = await fetch(
        "/DATA.json"
      )
      const toJSON = await menuData.json()

      dispatch({ type: GET_MENU_DATA, payload: toJSON })
    } catch (err) {
      console.error(err.message)
    }
  }

  const { date, menu, loading } = state;

  return (
    <AppContext.Provider
      value={{
        date,
        menu,
        loading,
        setAppDate,
        getMenuData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
