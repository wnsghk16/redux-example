import {userConstants} from '../constants'
import {userService} from "../apis";

const userActions = {
    login, join
}
function join(userid, password, email) {
    alert(`ID: ${userid}, PW: ${password}, Email: ${email}`)

}

function login(userid, password) {
    alert(`ID: ${userid}, PW: ${password}`)
    userService.loginService(userid, password)

    return dispatch =>{
        dispatch(request(userid))
    }

    const request = user => { return { type: userConstants.LOGIN_REQUEST, user}}
    const success = user => { return { type: userConstants.LOGIN_SUCCESS, user}}
    const failure = user => { return { type: userConstants.LOGIN_FAILURE, user}}
}
export default userActions