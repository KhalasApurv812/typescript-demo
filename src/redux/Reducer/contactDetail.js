const intialstate = {
  formdata : {}
};

const contactDetailReducer = (state = intialstate, action) => {
  switch (action.type) {
    case "CONTACT_DETAILS":
      return {
        ...state,
        formdata: action.formdata,
      };
    default:
      return state;
  }
};
export default contactDetailReducer;