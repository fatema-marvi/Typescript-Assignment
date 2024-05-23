function make_album(artist:string,album:string,tracks?:number) {
 
    const Album: {artist:string,album:string,tracks?:number} = {

        artist: artist,
        album: album
    }
    if(tracks !== undefined){
        Album.tracks = tracks;
    }
    return Album;
}
const album1 = make_album("Atif Aslam","Tere Bin");
console.log(album1);

const album2 = make_album("himesh", "Aap ka suroor");
console.log(album2);

const album3 = make_album("Jay Sean","Baby",10);
console.log(album3);