const initialState = {
  tab: 'MAIN',
};
const temporaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_TEMPORARY":
      return {
        ...state,
        [action.fieldName]: action.value,
      };

    default:
      return state;
  }
};
export default temporaryReducer;
