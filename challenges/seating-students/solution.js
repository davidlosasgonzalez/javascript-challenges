function SeatingStudents(arr) { 

    let numDesks = arr[0];
    const desks = [numDesks];
    let count = 0;
    let result = 0;
    let index;
    let i;
      
    for ( numDesks ; count = numDesks ; numDesks--) {
      desks[count] = numDesks;
    }
     
    desks.shift();
    arr.shift();
    
    for ( i = 0 ; i < arr.length ; i++) {
      count = arr[i];
      index = desks.indexOf(count);
      desks.splice(index, 1);
    }
    
    for ( i = 0 ; i < desks.length ; i++) {
      
      count = desks[i];
      
      if (count % 2 === 1) {
        if (desks.includes(count + 1) && desks.includes(count + 2)) {
          result = result + 2;
        }
        else if (desks.includes(count + 1)) {
          result++;
        }
        else if (desks.includes(count + 2)) {
          result++;
        }
      }
      
      else {
        if (desks.includes(count + 2)) {
          result++;
        }
      }
    }
    
    console.log(result);
         
}
   
SeatingStudents([9,4,2,1,]);
