import React, {useCallback} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {change_input, insert, remove, toggle} from "./todos.reducer";
import Todos from "./TodosComponent";
const TodosContainer = () => {
    const input = useSelector(state=>state.todosReducer.input)
    const todos = useSelector(state=>state.todosReducer.todos)
    const dispatch = useDispatch()
    const onChangeInput = useCallback(()=>dispatch(change_input()),[dispatch])
    const onInsert = useCallback(()=>dispatch(insert()),[dispatch])
    const onToggle = useCallback(()=>dispatch(toggle()),[dispatch])
    const onRemove = useCallback(()=>dispatch(remove()),[dispatch])
    return(
        <Todos input={input} onChangeInput={onChangeInput} onInsert={onInsert} onToggle={onToggle} onRemove={onRemove} todos={todos}/>
    )

};

export default TodosContainer;