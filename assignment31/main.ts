
let userNames: string[] = ['Admin', 'Adnan','Ali','Mustafa','Taha'];

//no users
if (userNames.length === 0){
    console.log("we need to find new users.");
}
else {
    userNames = [];
    console.log("all usernames has been removed. "+ userNames.length);
}