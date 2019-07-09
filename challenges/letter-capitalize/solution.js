function LetterCapitalize(str) { 

const capitalize = str.toLowerCase().split(' ');

   for (let i = 0; i < capitalize.length; i++) {

       capitalize[i] = capitalize[i].charAt(0).toUpperCase() + capitalize[i].substring(1);     
   }

   console.log(capitalize.join(' ')); 
} 
   
LetterCapitalize("My blue house has a small window.");
