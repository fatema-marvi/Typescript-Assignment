let userNames: string[] = ['Admin', 'Adnan','Ali','Mustafa','Taha'];
for(let i=0; i<userNames.length; i++)

if (userNames[i]==='Admin'){
    console.log('Hellow Admin, would you like to see a status report?');
}

else {
    console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
}