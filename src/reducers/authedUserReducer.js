import { SET_AUTHED_USER } from '../actions/authedUserActions'

export default function authedUserReducer (state = {}, action) {
  switch (action.type) {
    case SET_AUTHED_USER :
      const { authedUser } = action;
      return {...state, authedUser};
    default :
      return state
  }
}