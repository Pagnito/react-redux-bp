import {GET_USER, SIGN_IN, SIGN_OUT} from '../ActionTypes';


export default (state = init, action) => {
  switch(action.type) {
    case GET_USER:
      break;
    case SIGN_IN:
      break;
    case SIGN_OUT:
      break; 
    default:
      return state;   
  }
}