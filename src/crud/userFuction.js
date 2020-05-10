
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


    export function searchEmployeeDetails(searchName){
        const userInfo = reloadData();
        console.log("SearchName : ",searchName)
        // Variable to hold the original version of the list
        let currentList = [];
        // Variable to hold the filtered list before putting into state
        let newList = [];

            // If the search bar isn't empty
        if (searchName!== "") {
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