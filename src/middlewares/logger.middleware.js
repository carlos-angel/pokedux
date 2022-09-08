const logger = (store) => (next) => (action) => {
  console.info('action', action);
  next(action);
};

export default logger;
