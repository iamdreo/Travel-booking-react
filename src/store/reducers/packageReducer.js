const initState = {}

const packageReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PACKAGE_SUCCESS':
      console.log('create package success');
      return state;
    case 'CREATE_PACKAGE_ERROR':
      console.log('create package error');
      return state;
    default:
      return state;
  }
};

export default packageReducer;