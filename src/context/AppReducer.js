import {
  SET_APP_DATE,
  GET_MENU_DATA,
  GET_LOCATION_DATA,
  SET_SELECTED_LOCATION,
  SET_BOTTOM_SHEET_OPEN,
} from "./AppTypes";

export default (state, { type, payload }) => {
  switch (type) {
    case SET_APP_DATE:
      return {
        ...state,
        date: payload,
      };
    case SET_SELECTED_LOCATION:
      return {
        ...state,
        selected_location: payload,
      };
    case SET_BOTTOM_SHEET_OPEN:
      return {
        ...state,
        is_bottom_sheet_open: payload,
      };
    case GET_MENU_DATA:
      return {
        ...state,
        loading: false,
        menu: payload,
      };
    case GET_LOCATION_DATA:
      return {
        ...state,
        loading: false,
        location_data: payload,
      };
    default:
      return state;
  }
};
