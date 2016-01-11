import * as types from '../constants/ActionTypes'

export function addMessage(username, body) {
  return { type: types.ADD_MESSAGE, username, body}
}
