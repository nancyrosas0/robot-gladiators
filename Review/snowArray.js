/* eslint-disable */
console.log('hi');

//Write a function that takes an array of letters as an argument
//returns the letters concatenated into a string

var snowArray = ['s', 'n', 'o', 'w']; //snow

function transformArrayToString(letterArray){
    var word = ''; //word is declared here
for(var i=0; i< letterArray.length; i++) {
    word = word + letterArray[i]; //defined here
}
console.log(word);
return word;
}

transformArrayToString(snowArray); //this calls the function