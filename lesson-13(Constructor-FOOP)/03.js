function Store(reducer) {
  let state = reducer(undefined, {});
  let cbs = [];

  this.getState = () => state;
  this.subscribe = (cb) => (
    cbs.push(cb), () => (cbs) => cbs.filter((c) => c !== cb)
  );
  this.dispatch = (action) => {
    const newState = reducer(state, action);
    if (newState != state) {
      state = newState;
      for (let cb of cbs) cb();
    }
  };
}
