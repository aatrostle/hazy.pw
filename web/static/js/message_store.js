import Reflux from 'reflux';
import MessageActions from './message_actions'

let MESSAGES = [
   { id: 1, timestamp: (1450640260675), username: "SYSTEM", body: "**test message**" }
//   ,{ id: 2, timestamp: (1450640260675 + (1 * 60 * 1000)), username: "tom", body: "The quick brown fox jumps over the lazy dog" }
//   ,{ id: 3, timestamp: (1450640260675 + (2 * 60 * 1000)), username: "snarl", body: "The quick brown fox jumps over the lazy dog" }
//   ,{ id: 4, timestamp: (1450640260675 + (3 * 60 * 1000)), username: "snarl", body: "The quick brown fox jumps over the lazy dog" }
//   ,{ id: 5, timestamp: (1450640260675 + (5 * 60 * 1000)), username: "tom", body: "The quick brown fox jumps over the lazy dog" }
//   ,{ id: 6, timestamp: (1450640260675 + (7 * 60 * 1000)), username: "mike", body: "The quick brown fox jumps over the lazy dog" }
]

let messageStore = Reflux.createStore({
  listenables: MessageActions,

  onAddMessage(username, body) {
    let clone = MESSAGES.slice(0) // NOTE lets get immutable data in here soon
    let nextId = clone.reverse()[0].id + 1;

    // NOTE add the new message
    MESSAGES.push({timestamp: Date.now(), id: nextId, username: username, body: body})

    // NOTE this triggers a re-render, because this triggers the store to notify its subscribers
    this.trigger(MESSAGES);
  },
  getInitialState() {
    this.list = MESSAGES

    return this.list;
  }
});

export default messageStore;
