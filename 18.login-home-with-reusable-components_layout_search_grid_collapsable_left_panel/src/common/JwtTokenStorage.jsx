export function setToken(token){
    localStorage.setItem("jwtToken",token)
}

export function getToken(){
    return localStorage.getItem("jwtToken")
}

export function deleteToken(){
    return localStorage.removeItem("jwtToken")
}
