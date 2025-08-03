export const initState = {
  isDarkMode: false,
  home: "main",
};

export const modeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MODE":
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    case "HOME":
      return {
        ...state,
        home: state.home === "main" ? "page" : "main",
      };
    default:
      return state;
  }
};
