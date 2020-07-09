// Min Window Substring

// Using the JavaScript language, have the function MinWindowSubstring(strArr) take the array of strings stored in strArr, which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K. For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string. So for this example your program should return the string dae. 

// Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of the string. Both parameters will be strings ranging in length from 2 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters. 


function MinWindowSubstring(strArr){
    var min = null;
    var n = strArr[0];
    var k = strArr[1];
    for (var i = 0; i < n.length; i++) {
      for (var j = i + 1; j <= n.length; j++) {
        var sub = n.slice(i, j);
        if(checkK(sub, k)){
          if (min === null || sub.length < min.length){
            min = sub;
          }
        }
      }
    }
    return min;
  }
  
  function checkK(sub, k){
    var h = k.split('');
    for (var i = 0; i < sub.length; i++) {
      var char = sub[i];
      var index = h.indexOf(char);
      if(index > -1){
        h.splice(index, 1);
      }
    }
    if(h.length === 0){
      return true;
    } else {
      return false;
    }
  }
  
  
 // console.log(MinWindowSubstring(["aabdccdbcacd", "aad"])); // aabd
  console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"])); // aksfaje
  //console.log(MinWindowSubstring(["aaffhkksemckelloe", "fhea"])); // affhkkse
  
  
  // solution 2
  
  
  // function MinWindowSubstring(strArr) {
  //   const subs = substrings(strArr[0]);
  
  //   subs.sort((a, b) => a.length - b.length);
  
  //   for (let i = 0; i < subs.length; i++) {
  //     if (containsAllCharacters(subs[i], strArr[1])) {
  //       return subs[i];
  //     }
  //   }
  // }
  
  // function substrings(string) {
  //   const subs = [];
  
  //   for (let i = 0; i < string.length; i++) {
  //     for (let j = i; j < string.length; j++) {
  //       subs.push(string.slice(i, j + 1));
  //     }
  //   }
  
  //   return subs;
  // }
  
  // function containsAllCharacters(string, other) {
  //   const array = Array.from(string);
  
  //   for (let i = 0; i < other.length; i++) {
  //     const index = array.indexOf(other[i]);
  //     if (index !== -1) {
  //       array.splice(index, 1);
  //     } else {
  //       return false;
  //     }
  //   }
  
  //   return true;
  // }
     
  
  // solution 3
  
  
  // function MinWindowSubstring(strArr) {
  // 	let str = strArr[0];
  // 	let needle = strArr[1].split('');
  
  // 	//start with the smallest possible substrings, then go up
  // 	for (let i = needle.length, len = str.length; i <= len; i++ ) {
  // 		for (j = 0; j <= len - i; j++) {
  // 			let mySlice = str.substr(j, i);
  // 			if (isContained(mySlice)) {
  // 				return mySlice;
  // 			}
  // 		}
  // 	}
  // 	return 'Not in string';
  
  // // ---------------------- helpers -----------------------------
  // 	//isContained checks to see if all the chars in the needle are in the given string
  // 	function isContained(str) {
  // 		let arr = str.split('');
  // 		for (let i = 0, len = needle.length; i < len; i++) {
  // 			let place = arr.findIndex(val => {
  // 				return val === needle[i]
  // 			});
  // 			if (place === -1) {
  // 				return false;
  // 			} else {
  // 				arr.splice(place, 1);
  // 			}
  // 		}
  // 		return true;
  // 	}
  // }
     
  
  