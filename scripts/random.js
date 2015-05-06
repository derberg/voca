function random(){
  var word;

  var allWords = JSON.parse(sessionStorage.getItem('words'));
  //define languages and get random
  var languages = ['en','pl'];
  var language = randomizeArray(languages);
  var randomWords = randomizeArray(allWords);

  //get word from randomly selected language
  if (language === 'en') {
    //used to be checked
    word = randomWords.en;
    //to validate against
    checkList = randomWords.pl;
    $('#enWord').val(word);
    $('#enWord').attr("disabled", "disabled");
    $('#plWord').attr("placeholder", "type translation");
    $('#validation_language').attr("value", "pl");
  } else {
    //used to be checked
    word = randomWords.pl;
    //to validate against
    checkList = randomWords.en;
    $('#plWord').val(word);
    $('#plWord').attr("disabled", "disabled");
    $('#enWord').attr("placeholder", "type translation");
    $('#validation_language').attr("value", "en");
  }
}


//simple function to get an array and return randomly selected value
function randomizeArray(array){
    return array[Math.floor(Math.random()*array.length)];
}
