const actionsType = 'TEST_MEMBER'
const actionCreator = data => {
    return{type:actionsType,data}
}

const action = actionCreator({})