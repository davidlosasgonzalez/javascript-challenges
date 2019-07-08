function SimpleSymbols(str) { 
  
  lastLetter = str.slice(-1);

  if (str.match(/([^+][A-Za-z]*[^+])/g)) {
      console.log(false);
  }
  
  else if (str.match(/[+][A-Za-z][^+]/g)) {
      console.log(false);
  }
  
  else if (str.match(/[^+][A-Za-z][+]/g)) {
      console.log(false);
  }
  
  else if (str.match(/[^A-Za-z+=]/g)) {
    console.log(false);
  }
  
  else if (lastLetter.match(/[A-Za-z]/g)) {
    console.log(false);
  }
  
  else if (str.length === 0) {
    console.log(false);
  }
  
  else {
    console.log(true);
  }

}
   
SimpleSymbols("+a+=+a++++");
