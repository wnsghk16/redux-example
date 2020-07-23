import {combineReducers} from "redux";
import {userReducers} from './user.reducer'
import counterReducer from "../counter/counter.reducer";
import todosReducer from "../todos/todos.reducer"

const rootReducer = combineReducers({
    userReducers,
    counterReducer,
    todosReducer
})

export default rootReducer