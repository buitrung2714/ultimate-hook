import { SHOW_MODE } from "./types";

export const themeReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_MODE:
      return {
        ...state,
        isLightBg: !payload,
      };
    default:
      return state;
  }
};
