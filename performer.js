var w = $(window).width();
console.log(w);
var img = w-100;

if (w < 812) {
  $('ul.nav').css('display', 'block');
  $('ul.nav').css('margin', 'auto');
  var h = $('.nav').height();
  var imgH = h + 50;
  $('.row>.FirstImg').css('top', imgH);
};


// if(w<1200){
//   $('.col-12>img').css('width', img);
//   $('.col-xs-12>img').css('width', img);
//   $('.col-md-12>img').css('width', img);
// }



