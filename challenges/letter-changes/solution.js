function LetterChanges(str) { 
    
    const result = str.split("");
    
    const patron_a = /[A-Za-z]/;
    const patron_b = /[aeiou]/;

    result.forEach(function(val,i,arr) {
     
     if (val === " ") {
        arr[i] = " ";
     }
     
     else if (patron_a.test(val)) {
       
        arr[i] = String.fromCharCode(val.charCodeAt(val.length-1)+1);
        
        if (arr[i].match(patron_b)) {
          arr[i] = arr[i].toUpperCase();
        }
        
     }
     
    }); 
    
    console.log(result.join(""));  
    
    // The output should be: 
    // b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~
    
}

LetterChanges("a confusing /:sentence:/[ this is not!!!!!!!~");
