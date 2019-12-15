const initState = {
  items: {}
}

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SEARCH_SUCCESS':
      console.log('create search success');

      return {
        ...state,
        items: action.payload
      }

    case 'SEARCH_ERROR':
      console.log('create search error');
      return state;
    default:
      return state;
  }
};

export default searchReducer;