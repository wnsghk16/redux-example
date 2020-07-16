import {userConstants} from "../constants";
import {userService} from "../apis"

const userActions={
    login,
    join
}

function login(userid:string, passwd) {
    const request = user => { return { type: userConstants.LOGIN_REQUEST, user}}
    const success = user => { return { type: userConstants.LOGIN_SUCCESS, user}}
    const failure = user => { return { type: userConstants.LOGIN_FAIL, user}}
    alert(`ID : ${userid}, PW : ${passwd}`)
    userService.loginService(userid,passwd)

    return dispatch=>{
        dispatch(request(userid))
    }


}
function join(userid:string, passwd, email:string) {
    const request = user => { return { type: userConstants.LOGIN_REQUEST, user}}
    const success = user => { return { type: userConstants.JOIN_SUCCESS, user}}
    const failure = user => { return { type: userConstants.JOIN_FAIL, user}}
    alert(`ID : ${userid}, PW : ${passwd}, email : ${email}`)
    return dispatch=>{
        dispatch(request(userid))
    }


}
export default userActions