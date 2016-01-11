// TODO figure out why I have to do this.. or if I even have to
import "../../../deps/phoenix_html/web/static/js/phoenix_html"

import React from "react"
import ReactDOM from "react-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import BasicChatComponent from "./basic_chat_component"

import chatApp from './reducers'
let store = createStore(chatApp)

let rootElement = document.getElementById('main')

// NOTE eventually will render main app component
ReactDOM.render(
  <Provider store={store}>
    <BasicChatComponent />
  </Provider>,
  rootElement
);
