function countLetters(str) {
    // asign emty object to add on keys and values     
    var obj = {};
    // split input string to loop through and asign 
    var keyString = str.split("");

    
    // loop that loops through Keystring and asigns Index[i] keys of obj 
    for (i = 0; i < keyString.length; i++) {
       let letter = keyString[i]; 
     

/// if else check if keys exist. If it exist add 1 
if (obj[letter]) {
    obj[letter]++
} else { 
  obj[letter] = 1;

}

    }

return obj;
    
    };

console.log(countLetters("Lighthouse"));