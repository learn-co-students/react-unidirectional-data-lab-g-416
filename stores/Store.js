'use strict';

class Store {

  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }

  setState(newState) {
    this.state = newState;
    this.listeners.forEach(listener => listener(this.state));
  }

  getState() {
    return this.state;
  }

  addListener(listener) {
    this.listeners.push(listener);
    return () => {
      const listenerIndex = this.listeners.indexOf(listener)
      if (listenerIndex > -1) this.listeners.splice(listenerIndex, 1);
    }
  }
}

module.exports = Store;
