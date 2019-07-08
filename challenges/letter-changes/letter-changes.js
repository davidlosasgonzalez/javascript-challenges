function LetterChanges(str) { 
    
    const result = str.split("");
    
    const patron = /[A-Za-z]/;

    result.forEach(function(val,index,array ) {
     
     if (val === " ") {
        array[index] = " ";
     }
     
     else if (patron.test(val)) {
        array[index] = String.fromCharCode(val.charCodeAt(val.length-1)+1);
        if (array[index] === "a" || array[index] === "e" || array[index] === "i" || array[index] === "o" || array[index] === "u") {
            array[index] = array[index].toUpperCase();
        } 
     }
     
    }); 
    
    console.log(result.join(""));  
    
    // The output should be: 
    // b dpOgvtjOh /:tfOUfOdf:/[ UIjt jt OpU!!!!!!!~
    
}

LetterChanges("a confusing /:sentence:/[ this is not!!!!!!!~");
