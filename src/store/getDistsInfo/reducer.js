import { FETCH_GISTS_SUCCESS } from "./action";

const initialState = {
  data: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GISTS_SUCCESS:
      return state
    default: return state
  }
}
