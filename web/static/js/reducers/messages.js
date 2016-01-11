// NOTE this is a little extra work but will pay off long run, but yes, early optimization..
import { ADD_MESSAGE } from '../constants/ActionTypes'

// NOTE work to remove this.. not really sure why im doing this right now
const initialState = [
  { id: 1, timestamp: (1450640260675), username: "SYSTEM", body: "**test message**" }
]

export default function messages(state = initialState, action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        {
          id: state.reduce((maxId, message) => Math.max(message.id, maxId), -1) + 1,
          timestamp: Date.now(),
          username: action.username,
          body: action.body
        }
      ]

    default:
      return state
  }
}
