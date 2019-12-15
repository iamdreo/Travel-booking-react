export const searchPackage = queries => dispatch => {
  console.log(queries)
  
      dispatch({
        type: 'SEARCH_SUCCESS',
        payload: queries

      })
   
};