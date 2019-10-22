const initialState = {
  errors: {
    form: false,
    message: ""
  } 
};
export default (state = initialState, action: any): any => {
 switch (action.type) {
  case 'ERRORS_ACTION':
    return {
      ...state.errors,
      ...action.errors
    }
  default:
   return state
 }
}