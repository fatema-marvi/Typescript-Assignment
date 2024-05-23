let personName: string= "Fatema";
console.log("lowecase:",personName.toLowerCase());
console.log("uppercase:",personName.toUpperCase());
console.log("titlecase:",personName.replace(/\bw/g,c => c.toUpperCase()));