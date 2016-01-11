import { combineReducers } from 'redux';
import messages from './messages' // NOTE bring in other reducers

// NOTE merge all the reducers!!
const rootReducer = combineReducers({
  messages
})

export default rootReducer
