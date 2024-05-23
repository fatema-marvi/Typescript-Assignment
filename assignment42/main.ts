let Magicians: string[]=['Harry potter','Dr strange','Taha'];

function make_great(Magicians: string[]){

for(let i = 0; i < Magicians.length; i++){
    Magicians[i] = 'The Great,' + Magicians [i]
}
}
function show_magician(Magicians:string[]){
    for(let magician of Magicians){
        console.log(magician);
    }
}
make_great(Magicians);
show_magician(Magicians)