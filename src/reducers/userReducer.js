import { LOAD_USERS, UPDATE_USER } from '../actions/userActions'

export default function userReducer (state = {}, action) {
  switch (action.type) {
    case LOAD_USERS:{
        const { users } = action;
        return {
          ...state,
          users
        }
    }
    case UPDATE_USER:{
        const { user } = action;

        // update user
        const users = {...state.users};
        users[user.id] = user;
        
        return {
          ...state,
          users
        }
    }
    default :
      return state
  }
}