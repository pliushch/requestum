import { getDists } from "../../services";

export const FETCH_GISTS_REQUEST = 'FETCH_GISTS_REQUEST';
export const FETCH_GISTS_SUCCESS = 'FETCH_GISTS_SUCCESS';
export const FETCH_GISTS_FAILURE = 'FETCH_GISTS_FAILURE';

const fetchGistsRequest = () => ({
  type: FETCH_GISTS_REQUEST
})

const fetchGistsSuccess = (data) => ({
  type: FETCH_GISTS_SUCCESS,
  payload: data
})

const fetchGistsFailure = () => ({
  type: FETCH_GISTS_FAILURE
})

// export const fetchGists = (dispatch) => () => {
//
// }

export const fetchGists = () => {
  return async dispatch => {
    dispatch(fetchGistsRequest())
    try {
      const data = await getDists()
      console.log(data);
    } catch (e) {
      return 1
    }
  }
}
