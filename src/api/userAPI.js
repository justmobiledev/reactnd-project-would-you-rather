
  import {users} from '../database'

  function generateUID () {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    }
    
    export function _getUsers () {
      return new Promise((res, rej) => {
        setTimeout(() => res({...users}), 1000)
      })
    }

  