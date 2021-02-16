import {
  GET_USER_AUTH_FAILURE,
  GET_USER_AUTH_REQUEST,
  GET_USER_AUTH_SUCCESS,
  LOG_OUT,
} from "./action";

const initialState = {
  isAuth: false,
  loading: false,
  error: false,
  data: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_USER_AUTH_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
        data: action.data,
        error: false,
      };
    case GET_USER_AUTH_FAILURE:
      return {
        isAuth: false,
        loading: false,
        data: {},
        error: true,
      };
    case LOG_OUT:
      return {
        initialState,
      };
    default:
      return state;
  }
};
