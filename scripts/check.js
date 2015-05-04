$( '#form' ).submit(function( event ) {
  if ($('#validation_language').val() === 'pl'){
    check('plWord');
  } else {
    check('enWord');
  }



});

// when next button is available and clicked
document.getElementById('next').onclick = function(){ window.location.reload(); }



// check function for checking if one element is present in an array
function check(elementID) {
  if ( _.contains(checkList,$('#'+elementID).val()) ) {
    $('#confirmation').text('Correct!').show();
    $('#confirmation').removeClass('animated bounceInDown');
    $('#confirmation').addClass('animated bounceIn');
    $('.isSuccessful').addClass('good');
    //showing next button
    $( '#next' ).removeClass( 'off' );
    //hiding check button
    $( '#check' ).addClass( 'off' );
    //preventing page refresh
    event.preventDefault();
  } else {
    $('#confirmation').text('Wrong!').show();
    $('#confirmation').addClass('animated bounceInDown');
    $('.isSuccessful').addClass('bad');
    event.preventDefault();
  }
}
