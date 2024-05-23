let guestList = ['Adnan', 'Burhanuddin', 'Khadija'];
for (let i=0; i<guestList.length; i++){

console.log('Hello!' + guestList[i] + ',\n\n I am inviting you for a dinner party at ABC restaurant.\n THANKYOU!\n\n')
}
let absentGuest: string = "Khadija";
let newGuest: string = "Fatema";                                                                                                                          
guestList[2] = newGuest ;

for (let i=0; i<guestList.length; i++){
    console.log('Hello!' + guestList[i] + ',\n\n I am inviting you for a dinner party at ABC restaurant.\n THANKYOU!\n\n')
}
console.log(`${absentGuest}`, 'is not attending party');

console.log('Hey friends!\n We find a big table so we are inviting 3 new friends.');

guestList.unshift('Mustafa');
guestList.splice(2,0,'Hatim');
//we use splice method to add name in the middle
//splice asks 3 things index number, if u want todlt any thing or name, name you want to add  
guestList.push('Murtaza');

for (let i=0; i<guestList.length; i++){
    console.log('Hello!' + guestList[i] + ',\n\n I am inviting you for a dinner party at ABC restaurant.\n THANKYOU!\n\n')
}