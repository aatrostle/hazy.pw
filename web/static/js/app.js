// TODO figure out why I have to do this.. or if I even have to
import "../../../deps/phoenix_html/web/static/js/phoenix_html"

import React from "react"
import ReactDOM from "react-dom"

import BasicChatComponent from "./basic_chat_component"

// NOTE eventually will render main app component
ReactDOM.render(
  <BasicChatComponent />,
  document.getElementById('main')
);
