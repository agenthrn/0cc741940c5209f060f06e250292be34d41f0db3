import React, { useReducer } from "react";

import AppContext from "./AppContext";

import AppReducer from "./AppReducer";

import { SET_APP_DATE, SET_SELECTED_LOCATION, SET_BOTTOM_SHEET_OPEN, GET_MENU_DATA, GET_LOCATION_DATA } from "./AppTypes";

const AppState = ({ children }) => {
  const initialState = {
    date: new Date(),
    menu: [],
    location_data: [],
    selected_location: "Pilih alamat dahulu",
    loading: true,
    is_bottom_sheet_open: false,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setAppDate = (payload) => {
    dispatch({ type: SET_APP_DATE, payload });
  };

  const setSelectedLocation = (payload) => {
    dispatch({ type: SET_SELECTED_LOCATION, payload });
  };

  const setBottomSheetOpen = (payload) => {
    dispatch({ type: SET_BOTTOM_SHEET_OPEN, payload });
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

  const { date, menu, location_data, selected_location, loading, is_bottom_sheet_open } = state;

  return (
    <AppContext.Provider
      value={{
        date,
        menu,
        location_data,
        selected_location,
        loading,
        is_bottom_sheet_open,
        setAppDate,
        getMenuData,
        getLocationData,
        setSelectedLocation,
        setBottomSheetOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
