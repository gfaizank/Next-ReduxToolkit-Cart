const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    localStorage.setItem('cartItems', JSON.stringify(store.getState().cart));
    return result;
  };
  
  export default localStorageMiddleware;
  