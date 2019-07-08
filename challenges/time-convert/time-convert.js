function TimeConvert(num) { 

  let minuts = 0;

  for (num = num ; num >= 60 ; num = num - 60) {
      minuts++;
  }
  
  console.log(`${minuts}:${num}`);
         
}
  
TimeConvert(120);
