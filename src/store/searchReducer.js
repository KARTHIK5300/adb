const initialState = {
  db: []
};

const searchReducer = (state = initialState, action) => {
  console.log(action, "action");

  switch (action.type) {
    case "SEARCHTYPE":
      return {
        ...state,
        db: action.data
      };
    default:
      return {
        ...state
      };
  }
};

export default searchReducer;
