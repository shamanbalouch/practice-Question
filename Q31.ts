
// Q 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let userName1:string[] = ["shaman baloch", "ali " , "Sadam"];
if(userName1===null){

    console.log(" We need to find some users!")

}

// Remove all usernames from the array
userName1 = [];

// Check if the list of users is not empty after removal
if (userName1.length === 0) {
    console.log("We need to find some users!");
}