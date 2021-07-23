import { createStore, applyMiddleware, compose } from 'redux';
//import thunk from 'redux-thunk';
import rootReducer from './RootReducer';
let middleware = [];
let store;
console.log(process.env)
if(process.env.ENV==='dev'){
	store = createStore(
		rootReducer,
		compose(
			applyMiddleware(...middleware),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);
} else {
	store = createStore(
		rootReducer,
		compose(
			applyMiddleware(...middleware)
		)
	);
}
export default store;