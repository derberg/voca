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
    $('span').text('Correct!').show();
    $('span').removeClass('animated bounceInDown');
    $('span').addClass('animated bounceIn');
    $('.isSuccessful').addClass('good');
    //showing next button
    $( '#next' ).removeClass( 'off' );
    //hiding check button
    $( '#check' ).addClass( 'off' );
    //preventing page refresh
    event.preventDefault();
  } else {
    $('span').text('Wrong!').show();
    $('span').addClass('animated bounceInDown');
    $('.isSuccessful').addClass('bad');
    event.preventDefault();
  }
}
