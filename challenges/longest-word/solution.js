function LongestWord(sen) { 

  let longest_word = "";
  
  const words = sen.split(" "); 
  
  words.forEach(function(word) {
    
     word = word.replace(/[^A-Za-z]*/g, ''); 
      
    if (word.length > longest_word.length) {
       longest_word = word;
    }
   
  });
  
  console.log (longest_word); 
  
}

LongestWord("a beautiful sentence^&!");
