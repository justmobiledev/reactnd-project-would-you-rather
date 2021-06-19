import { LOAD_USERS } from '../actions/userActions'

export default function userReducer (state = {}, action) {
  switch (action.type) {
    case LOAD_USERS:{
        
        const { users } = action;
        return {
          ...state,
          users
        }
    }
    default :
      return state
  }
}