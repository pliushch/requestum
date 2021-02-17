import {
  FETCH_USER_INFO_FAILURE,
  FETCH_USER_INFO_REQUEST,
  FETCH_USER_INFO_SUCCESS,
  CHANGE_INPUT_VALUE,
} from "./action";

const initialState = {
  loading: false,
  data: [],
  error: false,
  term: "",
  searchList: [],
};

export const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO_REQUEST:
      return {
        ...state,
        searchList: [...state.searchList, action.payload],
        loading: true,
        data: [],
        error: false,
      };
    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: false,
      };
    case FETCH_USER_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: true,
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        term: action.payload,
      };
    default:
      return state;
  }
};
