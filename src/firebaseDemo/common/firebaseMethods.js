import fire from '../../config/fire'

// while login it will check in firebase user is available or not
export function signInWithEmailAndPassword(emailId,password) {
    fire.auth()
    .signInWithEmailAndPassword(emailId,password)
    .then((u) => {
        console.log("login Success : " ,u)
        return u;
    }).catch((err) => {
        console.log("login Error : ",err)
        return err;
    })
}

// while signUp it will check in firebase user is available or not
//if available it will return msg user is already available
//otherwise it will create new user
export function createUserWithEmailAndPassword(emailId,password) {
    fire.auth()
    .createUserWithEmailAndPassword(emailId,password)
    .then((u) => {
        console.log("signUp Success : " ,u)
        return u;
    }).catch((err) => {
        console.log("signUp Error : ",err)
        return err;
    })
}