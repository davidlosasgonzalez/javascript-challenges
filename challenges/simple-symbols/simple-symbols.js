function SimpleSymbols(str) { 
  
  lastLetter = str.slice(-1);

  if (str.match(/([^+][A-Za-z][^+])/g)) {
      console.log(false);
  }
  
  else if (str.match(/[+=][A-Za-z][^=+]/g)) {
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
  
  else if (str.length < 3) {
    console.log(false);
  }
  
  else {
    
    if (str.match(/[A-Za-z]/g)) {
      console.log(true);
    }
    
    else {
      console.log(false);
    }
  
  }

}
   
SimpleSymbols("+==+s+==+d+=+a+");
