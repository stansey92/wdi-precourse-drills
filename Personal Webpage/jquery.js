$(document).ready(function(){

   $('img').hover(function() {
    $(this).toggleClass('blue');
  })

   $('button').click(function() {
     var input = prompt('Yo you sure you are ready for this...? Type "yes" to procede')
     if (input === 'yes') {
       $('#header').css('background-color', 'Teal');
       $('#header').css('border-color', 'Teal');
       $('body').css('background-color', 'black');
     } else {
       alert('WOW really....? ಠ_ಠ')
     }


  })

});
