// viet ham tra ve student {type: ,payload}
// account={
//     username:"",
//     password:"",
//     role:""
// }
export function checkLogin(account){
    return{
        type:"LOGIN",
        payload:loginInfo
    }
}

export function logout(){
    return{
        type:"LOGOUT",
        payload:null
    }
}