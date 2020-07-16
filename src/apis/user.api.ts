import '../data/initialState.json'
const userService={
    loginService
}
function handleResponse(response) {
    return response.text()
        .then(text=>{
            const data = text && JSON.parse(text)
            if(!response.ok){
                if(response.state === 401){
                    window.location.reload()
                }
                const error = (data && data.message) ||
                    response.statusText
                return Promise.reject(error)
            }
            return data
        })
}
function loginService(userid, passwd) {
    alert('loginService진입')
    const requestOptions = {
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body : JSON.stringify({userid,passwd})
    }
    return fetch(`/initialState.json`,requestOptions)
        .then(handleResponse)
        .then(user=>{
            alert('json읽기 응답함')
            localStorage.setItem('user',JSON.stringify(user))
            return user
        })
}
export default userService