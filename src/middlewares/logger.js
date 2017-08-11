function Logger({ dispatch }) {
  return next => action => {
    console.log('Action: ', action);

    next(action);
  }
}

export default Logger;