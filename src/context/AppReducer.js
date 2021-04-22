import {
  SET_APP_DATE,
  GET_MENU_DATA,
  GET_LOCATION_DATA,
  SET_SELECTED_LOCATION,
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
