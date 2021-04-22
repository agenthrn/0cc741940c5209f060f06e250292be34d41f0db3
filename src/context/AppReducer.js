import { SET_APP_DATE } from "./AppTypes";

export default (state, { type, payload }) => {
  switch (type) {
    case SET_APP_DATE:
      return {
        ...state,
        date: payload,
      };
    default:
      return state;
  }
};
