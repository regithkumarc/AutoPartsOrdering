
    function reloadData() {
        return JSON.parse(localStorage.getItem('userInfo'))
    }


    export function addUserDetails(user) {

        const userInfo = reloadData();
        console.log("UserInfo : ",userInfo)
        let userArr = [];
        if(userInfo){
            userArr = userInfo
            userArr.push(user);
            localStorage.setItem("userInfo",JSON.stringify(userArr))
            return "Added Succesfully";
        }else{
            userArr = [];
            userArr.push(user)
            localStorage.setItem("userInfo",JSON.stringify(userArr))
            return "Added Succesfully";
        }
    }

    export function checkUserExists(userName){
        const userInfo = reloadData();
        const userCount = userInfo.length;
        if(userInfo && userCount > 0) {
            for(let i=0;i<userCount;i++){
                if(userInfo[i].userName ===  userName){
                    console.log("Username : ",userName)
                    console.log("userArr[i].userName",userInfo[i].userName)
                    return true;
                }
            }
        }
        return false;
    }
