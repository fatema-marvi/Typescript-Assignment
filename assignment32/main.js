"use strict";
let current_users = ['Adnan', 'Ali', 'Amir', 'Tahir', 'Taha'];
let new_users = ['Amir', 'Tahir', 'Danish', 'Joy', 'Peter'];
//for loop method
for (let i = 0; i < new_users.length; i++) {
    //check if the new user is already in used
    const usernameExists = current_users.some(user => user.toLowerCase() === new_users[i].toLowerCase());
    //if the the username exist
    if (usernameExists) {
        console.log(`This username '${new_users[i]}' is already used.' please enter a new Username`);
    }
    else {
        console.log(`The username"${new_users[i]}"is available.`);
    }
}
