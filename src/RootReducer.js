import { combineReducers } from "redux";
import HomeReducer from "./Containers/Home/Reducers";
import HeaderReducer from "./Containers/Header/Reducers";
import FooterReducer from "./Containers/Footer/Reducers";
export default combineReducers({
  //home: HomeReducer,
  header: HeaderReducer,
  //footer: FooterReducer,
});
