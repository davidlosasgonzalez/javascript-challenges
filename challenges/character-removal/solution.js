function CharacterRemoval(strArr) { 
  
  const mainWord = strArr[0].split('');
  const dict_array = strArr[1].split(',');
  let dict_matches = [];
  let i = -2
  let x = 0;
  let result;
  
  for ( let a = 0 ; a < dict_array.length ; a++ ) {
    const dict_word = dict_array[a].split('');
    const wrong_matches = [...dict_word];
    
    for ( let b = 0 ; b < dict_word.length ; b++ ) {
      const letter = dict_word[b];
      const sliced = mainWord.slice(x, mainWord.length);
      const index = sliced.indexOf(letter);
      
      if (index === -1) {
        wrong_matches.push('!');
      }
      
      i = index;
      x = x + 1 + index;
    }
    
    i = -2;
    x = 0;

    if (wrong_matches.indexOf('!') === -1) {
      const word = dict_word.join('');
      dict_matches.push(word);
    }
    
  }

  if (dict_matches.length === 0) {
    result = -1;
  }
  
  else {
    
    let lastWord = 'a';
    
    for ( let a = 0 ; a < dict_matches.length ; a++ ) {
      
      if (dict_matches[a].length >= x) {
        x = dict_matches[a].length;
      }
      
    }

    result = mainWord.length - x;
    
  }
  
  console.log(result);
  
}
  
CharacterRemoval(["abiivcjfhuaiiir", "aba,ee,iii,loa,table,chair"]);
