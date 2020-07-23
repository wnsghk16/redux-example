import {createAction,handleActions} from "redux-actions";

const CHANGE_INPUT = 'todos/CHANGE_INPUT'
const INSERT = 'todos/INSERT'
const TOGGLE = 'todos/TOGGLE'
const REMOVE = 'todos/REMOVE'

export const change_input = createAction(CHANGE_INPUT)
export const insert = createAction(INSERT)
export const toggle = createAction(TOGGLE)
export const remove = createAction(REMOVE)

const initialState={input:'', todos:''}

const todosReducer = handleActions(
    {
        [CHANGE_INPUT] : (state,action) => ({input:state.input}),
        [INSERT] : (state,action) => ({input:state.input}),
        [TOGGLE] : (state,action) => ({input:state.input}),
        [REMOVE] : (state,action) => ({input:state.input})
    },
    initialState
)
export default todosReducer