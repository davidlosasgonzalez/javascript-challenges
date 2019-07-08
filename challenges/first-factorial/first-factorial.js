function FirstFactorial(num) { 
  
  if (num === 0 || num === 1) {
    return 1;
  }
  else {
     console.log(num * FirstFactorial(num - 1)); 
  }      
}
   
FirstFactorial(5);
