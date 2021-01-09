var elem = document.querySelector('.main-gallery');
var flkty = new Flickity ( elem, {
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  freeScroll: false,
  pageDots: false,
  autoPlay: 10000, //ms
  friction: 1,
  cellAlign: 'center'
  //fade, adaptiveHeight, friction: 1.0
});