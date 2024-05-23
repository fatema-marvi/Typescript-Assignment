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