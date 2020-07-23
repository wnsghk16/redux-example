import {createAction, handleActions} from 'redux-actions'

const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)

const initialState={ number : 0 }

const counterReducer = handleActions(
    {
        [INCREASE] : (state) => ({number:state.number + 1}),
        [DECREASE] : (state) => ({number:state.number - 1})
    },
    initialState
)

export default counterReducer