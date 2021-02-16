import {
  FETCH_GISTS_FAILURE,
  FETCH_GISTS_REQUEST,
  FETCH_GISTS_SUCCESS,
} from "./action";

const initialState = {
  loading: false,
  data: [],
  error: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GISTS_REQUEST:
      return {
        loading: true,
        data: [],
        error: false,
      };
    case FETCH_GISTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: false,
      };
    case FETCH_GISTS_FAILURE:
      return {
        loading: false,
        data: [],
        error: true,
      };
    default:
      return state;
  }
};
