import { SEARCH_BOOK } from "../actions/actionType";

const initialState = {
  title: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
