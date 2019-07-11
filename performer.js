var w = $(window).width();
console.log(w);
var img = w-100;

if (w < 812 || w==980) {
  $('ul.nav').css('display', 'block');
  $('ul.nav').css('margin', 'auto');
  $('ul.nav p').css('font-size','18px');
  $('#titleBar').removeClass('fixed-top');
  // var h = $('.nav').height();
  // var imgH = h + 50;
   $('.row>.FirstImg').css('top','5px');
   $('#section5_icon').css('padding-right','10px');

};

//if(w==980){
  //$('#section5_icon').css('padding-right','3px');
//}

// if(w<1200){
//   $('.col-12>img').css('width', img);
//   $('.col-xs-12>img').css('width', img);
//   $('.col-md-12>img').css('width', img);
// }



