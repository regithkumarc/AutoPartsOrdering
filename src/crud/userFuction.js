
let userInfoList = [];

export function reloadUserDataCount() {
    getAllUserItem();
    return userInfoList.length;
}

export function getAllUserItem() {
    userInfoList = [];
    let value = JSON.parse(localStorage.getItem("userInfo"));
    if (value != null && value.length > 0) {
        for (let i = 0; i < value.length; i++) {
            console.log("value[i]", value[i])
            userInfoList.push(value[i]);
        }
    }
    return userInfoList;
}

export function addUserDetails(user) {
    getAllUserItem();
    //console.log("UserInfo : ", userInfo)
    //let userArr = [];
    if (userInfoList != null && userInfoList.length > 0) {
        //userArr = userInfo
        userInfoList.push(user);
        localStorage.setItem("userInfo", JSON.stringify(userInfoList))
        return "Added Succesfully";
    } else {
        userInfoList = [];
        userInfoList.push(user)
        localStorage.setItem("userInfo", JSON.stringify(userInfoList))
        return "Added Succesfully";
    }
}

export function registerUserDetails(user) {
    getAllUserItem();
    //console.log("UserInfo : ", userInfo)
    //let userArr = [];
    if (userInfoList != null && userInfoList.length > 0) {
        //userArr = userInfo
        userInfoList.push(user);
        localStorage.setItem("userInfo", JSON.stringify(userInfoList))
        return "Registered Succesfully";
    } else {
        userInfoList = [];
        userInfoList.push(user)
        localStorage.setItem("userInfo", JSON.stringify(userInfoList))
        return "Registered Succesfully";
    }
}

export function checkUserExists(userName) {
    getAllUserItem();
    console.log(userName)
    //console.log(userInfo)
    //const userCount = userInfo.length;
    if (userInfoList && userInfoList.length > 0) {
        for (let i = 0; i < userInfoList.length; i++) {
            if (userInfoList[i].userName === userName) {
                console.log("Username : ", userName)
                console.log("userArr[i].userName", userInfoList[i].userName)
                return true;
            }
        }
    }
    return false;
}


export function searchEmployeeDetails(searchName) {
    const userInfo = getAllUserItem();
    console.log("SearchName : ", searchName)
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (searchName !== "") {
        // Assign the original list to currentList
        currentList = userInfo;

        // Use .filter() to determine which items should be displayed
        // based on the search terms
        newList = currentList.filter(item => {
            // change current item to lowercase
            const lc = item.toLowerCase();
            // change search term to lowercase
            const filter = searchName.toLowerCase();
            // check to see if the current list item includes the search term
            // If it does, it will be added to newList. Using lowercase eliminates
            // issues with capitalization in search terms and search content
            return lc.includes(filter);
        });
    } else {
        // If the search bar is empty, set newList to original task list
        newList = userInfo
    }
    // Set the filtered state based on what our rules added to newList
    return newList;
}

// function reloadCartData() {
//     return JSON.parse(localStorage.getItem("cartItem"));
// }

export function addOrUpdateCartData(cartData) {
    getAllCartItem();
    var isFlag = false;
    if (userInfoList != null && userInfoList.length > 0) {
        for (let i = 0; i < userInfoList.length; i++) {
            isFlag = false;
            if (userInfoList[i].id === cartData.id) {
                cartData.count = userInfoList[i].count + 1;
                var index = userInfoList.indexOf(i)
                userInfoList.splice(index, 1);
                userInfoList.push(cartData);
                localStorage.setItem("cartItem", JSON.stringify(userInfoList))
                isFlag = true;
                break;
            }
        }

        if (!isFlag) {
            cartData.count = 1;
            userInfoList.push(cartData);
            localStorage.setItem("cartItem", JSON.stringify(userInfoList))
        }
    } else {
        console.log("flag")
        userInfoList = [];
        cartData.count = 1;
        userInfoList.push(cartData);
        localStorage.setItem("cartItem", JSON.stringify(userInfoList));
    }
}

export function reloadCartDataCount() {
    getAllCartItem();
    return userInfoList.length;
}

export function getAllCartItem() {
    userInfoList = [];
    let value = JSON.parse(localStorage.getItem("cartItem"));
    if (value != null && value.length > 0) {
        for (let i = 0; i < value.length; i++) {
            console.log("value[i]", value[i])
            userInfoList.push(value[i]);
        }
    }
    return userInfoList;
}


export function removeCartItem(cartItem) {
    getAllCartItem();
    if (userInfoList && userInfoList.length > 0) {
        for (let i = 0; i < userInfoList.length; i++) {
            if (userInfoList[i].id === cartItem.id) {
                console.log("userInfoList[i].id",userInfoList[i].id)
                console.log("userInfoList[i].id",cartItem.id)
                var index = userInfoList.indexOf(i)
                userInfoList.splice(index, 1);
                localStorage.setItem("cartItem", JSON.stringify(userInfoList))
                return true;
            }
        }
    }
    return false;
}