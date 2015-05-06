$( document ).ready(function() {
    var allWords = book1.concat(book2, book3);
    sessionStorage.setItem('words', JSON.stringify(allWords));
    totalWords = allWords.length;
    //putting information about the number of selected words
    $('.learn').html('Learn ' + totalWords+' different words');

    if (window.location.hash == "#next") {
      //hiding start button
      $( '#start' ).removeClass( 'active' );
      $( '#start' ).addClass( 'off' );
      //showing check button
      $( '#check' ).addClass( 'active' );
      $( '#check' ).removeClass( 'off' );
      //showing start all over button;
      $( '#startallover' ).removeClass( 'off' );
      $( '#startallover' ).addClass( 'active' );
      random();
    }

});

//what happends when you click start
document.getElementById('start').onclick = function(){
  //hiding start button
  $( '#start' ).addClass( 'off' );
  //showing start all over button;
  $( '#startallover' ).removeClass( 'off' );
  $( '#startallover' ).addClass( 'active' );
  //showing next button
  $( '#next' ).addClass( 'off' );
  //showing check button
  $( '#check' ).removeClass( 'off' );
  $( '#check' ).addClass( 'active' );

  random();
}

//changing the base of words for learning
function base(book){
  sessionStorage.setItem('words', JSON.stringify(book));
  totalWords = book.length;
  //putting information about the number of selected words
  $('.learn').html('Learn ' + totalWords+' different words');
}

//what happens when you click start all over
document.getElementById('startallover').onclick = function(){
  history.pushState('', document.title, window.location.pathname);
  window.location.reload();
}
