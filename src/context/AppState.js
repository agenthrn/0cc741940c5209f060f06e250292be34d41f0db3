import React, { useReducer } from "react";

import AppContext from "./AppContext";

import AppReducer from "./AppReducer";

import { SET_APP_DATE, SET_SELECTED_LOCATION, GET_MENU_DATA, GET_LOCATION_DATA } from "./AppTypes";

const AppState = ({ children }) => {
  const initialState = {
    date: new Date(),
    menu: [],
    location_data: [],
    selected_location: "Pilih alamat dahulu",
    loading: true,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setAppDate = (payload) => {
    dispatch({ type: SET_APP_DATE, payload });
  };

  const setSelectedLocation = (payload) => {
    dispatch({ type: SET_SELECTED_LOCATION, payload });
  };

  const getMenuData = async () => {
    try {
      const menuData = await fetch("/DATA.json");
      const toJSON = await menuData.json();

      dispatch({ type: GET_MENU_DATA, payload: toJSON });
    } catch (err) {
      console.error(err.message);
    }
  };

  const getLocationData = async (key) => {
    try {
      if (key.length > 2) {
        const locationData = await fetch("/LOCATION_DATA.json");
        const toJSON = await locationData.json();

        const filter = toJSON.location.filter(function (el) {
          return el.locationName.includes(key);
        });

        dispatch({ type: GET_LOCATION_DATA, payload: filter });
      } else if (key < 3) {
        dispatch({ type: GET_LOCATION_DATA, payload: [] });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const { date, menu, location_data, selected_location, loading } = state;

  return (
    <AppContext.Provider
      value={{
        date,
        menu,
        location_data,
        selected_location,
        loading,
        setAppDate,
        getMenuData,
        getLocationData,
        setSelectedLocation
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
