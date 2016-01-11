import * as types from '../constants/ActionTypes'

import configureChannel from "../channel"

let channel = configureChannel();

export function addMessage(username, body) {
  return dispatch => {
    // NOTE should first dispatch an action like `addMessageRequest(username, body)`
    // for now we'll wait for the response on the socket
    // later we can optimistically update the UI then handle the response to confirm

    channel.push("new_msg", { username: username, body: body })
      .receive("ok", (response) => {
        // console.log("created message", response);

        dispatch({ type: types.ADD_MESSAGE, username, body })
      })
      .receive("error", (error) => {
        console.log("create failed", error)

        // NOTE should dispatch an action like `addMessageFailure(username, body)`
        // dispatch({ type: types.ADD_MESSAGE, username, body })
      })
   }
}
