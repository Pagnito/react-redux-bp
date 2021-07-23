import UserReducer from "./UserReducer";

let init_user = {
  isAuthenticated: false,
  user: null
}
export default (state = init_user, action) => {
  return (
    UserReducer(state, action) &&
    UserReducer(state, action)
  )
    
};
