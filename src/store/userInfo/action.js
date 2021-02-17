import { searchUserInfo } from "../../services";

export const FETCH_USER_INFO_REQUEST = "FETCH_USER_INFO_REQUEST";
export const FETCH_USER_INFO_SUCCESS = "FETCH_USER_INFO_SUCCESS";
export const FETCH_USER_INFO_FAILURE = "FETCH_USER_INFO_FAILURE";
export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";

const fetchUserRequest = (value) => ({
  type: FETCH_USER_INFO_REQUEST,
  payload: value
});

const fetchUserSuccess = (data) => ({
  type: FETCH_USER_INFO_SUCCESS,
  payload: data,
});

const fetchUserFailure = () => ({
  type: FETCH_USER_INFO_FAILURE,
});

export const setTerm = (value) => ({
  type: CHANGE_INPUT_VALUE,
  payload: value
})

export const fetchUserInfo = (value) => async (dispatch) => {
  dispatch(fetchUserRequest(value));
  try {
    const { data } = await searchUserInfo(value);
    dispatch(fetchUserSuccess(data));
  } catch (e) {
    dispatch(fetchUserFailure());
  }
};
