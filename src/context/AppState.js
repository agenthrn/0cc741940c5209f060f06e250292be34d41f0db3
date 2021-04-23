import React, { useReducer } from "react";

import AppContext from "./AppContext";

import AppReducer from "./AppReducer";

import { SET_APP_DATE, SET_SELECTED_LOCATION, SET_CART_DATA, GET_CART_DATA, SET_BOTTOM_SHEET_OPEN, SET_SNACKBAR_OPEN, GET_MENU_DATA, GET_LOCATION_DATA, SET_SELECTED_CATEGORY } from "./AppTypes";

const AppState = ({ children }) => {
  const initialState = {
    date: new Date(),
    menu: [],
    location_data: [],
    cart_data: [],
    selected_location: "Pilih alamat dahulu",
    selected_category: "lunch",
    loading: true,
    is_bottom_sheet_open: false,
    is_snackbar_open: false,
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setAppDate = (payload) => {
    dispatch({ type: SET_APP_DATE, payload });
  };

  const setSelectedLocation = (payload) => {
    dispatch({ type: SET_SELECTED_LOCATION, payload });
  };

  const setSelectedCategory = (payload) => {
    dispatch({ type: SET_SELECTED_CATEGORY, payload });
  };

  const setCartData = (payload) => {
    dispatch({ type: SET_CART_DATA, payload });
  };

  const setBottomSheetOpen = (payload) => {
    dispatch({ type: SET_BOTTOM_SHEET_OPEN, payload });
  };

  const setSnackbarOpen = (payload) => {
    dispatch({ type: SET_SNACKBAR_OPEN, payload });
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
          return el.locationName.toLowerCase().includes(key.toLowerCase());
        });

        dispatch({ type: GET_LOCATION_DATA, payload: filter });
      } else if (key < 3) {
        dispatch({ type: GET_LOCATION_DATA, payload: [] });
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const { date, menu, cart_data, location_data, selected_location, selected_category, loading, is_bottom_sheet_open, is_snackbar_open } = state;

  return (
    <AppContext.Provider
      value={{
        date,
        menu,
        cart_data,
        location_data,
        selected_location,
        selected_category,
        loading,
        is_bottom_sheet_open,
        is_snackbar_open,
        setAppDate,
        getMenuData,
        getLocationData,
        setSelectedLocation,
        setBottomSheetOpen,
        setSnackbarOpen,
        setCartData,
        setSelectedCategory
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
