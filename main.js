$(document).ready(() => {
  $('.menu-btn ').on('click', () => {
     $(".nav-bar .menu").toggleClass("menu-fade");
    $('.menu-btn .top').toggleClass('top-rotate');
    $(".menu-btn .middle").toggleClass("middle-fade");
    $(".menu-btn .bottom").toggleClass("bottom-rotate");
   
  })
})