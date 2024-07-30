class Store {
  #reducer;
  #state;
  #cbs = [];

  constructor(reducer) {
    this.#reducer = reducer;
    this.#state = this.#reducer(undefined, {});
  }

  getState() {
    return this.#state;
  }

  subscribe(cb) {
    this.#cbs.push(cb);
    return () => (this.#cbs = this.#cbs.filter((c) => c !== cb));
  }

  dispatch(action) {
    const newState = this.#reducer(this.#state, action);
    if (newState != this.#state) {
      this.#state = newState;
      for (let cb of this.#cbs) cb();
    }
  }

  get state() {
    return this.#state;
  }
}

class StoreThunk extends Store {
  constructor(reducer) {
    super(reducer);
  }

  dispatch(action) {
    if (typeof action === "function") {
      //если action - не объект, а функция

      return action(this.dispatch.bind(this), this.getState.bind(this)); //запускаем эту функцию и даем ей dispatch и getState для работы
    } else {
      super.dispatch(action);
    }
  }
}
