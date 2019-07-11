var w = $(window).width();
var img = w-100;
if(w<1200){
  $('img').css('width', img)
}
var h = $('.nav').height();
var imgH = h+30;
$('.row>.FirstImg').css('top',imgH);
