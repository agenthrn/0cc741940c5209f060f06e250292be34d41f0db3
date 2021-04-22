import { SET_APP_DATE, GET_MENU_DATA } from "./AppTypes";

export default (state, { type, payload }) => {
  switch (type) {
    case SET_APP_DATE:
      return {
        ...state,
        date: payload,
      };
    case GET_MENU_DATA:
      return {
        ...state,
        loading: false,
        menu: payload,
      };
    default:
      return state;
  }
};
