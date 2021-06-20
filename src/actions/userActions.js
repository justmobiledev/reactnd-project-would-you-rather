export const LOAD_USERS = 'LOAD_USERS';
export const UPDATE_USER = 'UPDATE_USER';

export function loadUsers (users) {
  return {
    type: LOAD_USERS,
    users,
  }
}

export function updateUser (user) {
    return {
      type: UPDATE_USER,
      user,
    }
  }