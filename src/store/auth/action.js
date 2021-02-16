export const GET_USER_AUTH_REQUEST = "GET_USER_AUTH_REQUEST";
export const GET_USER_AUTH_SUCCESS = "GET_USER_AUTH_SUCCESS";
export const GET_USER_AUTH_FAILURE = "GET_USER_AUTH_FAILURE";
export const LOG_OUT = "LOG_OUT";

const getUserAuthRequest = () => ({
  type: GET_USER_AUTH_REQUEST,
});

const getUserAuthSuccess = (data) => ({
  type: GET_USER_AUTH_SUCCESS,
  data,
});

const getUserAuthFailure = () => ({
  type: GET_USER_AUTH_FAILURE,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const fetchUserAuth = (login, password) => (dispatch) => {
  dispatch(getUserAuthRequest());
  setTimeout(() => {
    if (login && password) {
      return dispatch(
        getUserAuthSuccess({
          fullName: "Самурай Андрій Андрійович",
          login: "samurai@gmail.com",
          subdivision: "Юридичний відділ",
          role: "Депозитор",
        })
      );
    } else {
      dispatch(getUserAuthFailure());
    }
  }, 1000);
};
