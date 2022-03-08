import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import TodosReducer from "./reducers/todo";
const rootReducer = combineReducers({ toDo: TodosReducer });
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
