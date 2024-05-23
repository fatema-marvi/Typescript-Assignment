let Magicians: string[]=['Harry potter','Dr strange','Taha'];

function make_great(Magicians:string[]){
    let greatMagicians = Magicians.slice();   //slice is amethod to coppy array

for(let i = 0; i < greatMagicians.length; i++){
    greatMagicians[i] = 'The Great' + greatMagicians[i];
}
return greatMagicians;     // return the new array
}
 function show_magician(Magicians:string[]){
        for(let magician of Magicians){
            console.log(magician);
        }
    }
    let greatMagicians = make_great(Magicians);
    console.log("original Magicians");
    show_magician(Magicians)


    console.log("\n Great Magicians:");
    show_magician(greatMagicians)