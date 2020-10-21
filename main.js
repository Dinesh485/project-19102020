$(document).ready(() => {
  $('.menu-btn ').on('click', () => {
    $(".nav-bar .menu").toggleClass("menu-fade");
    $('.menu-btn .top').toggleClass('top-rotate');
    $(".menu-btn .middle").toggleClass("middle-fade");
    $(".menu-btn .bottom").toggleClass("bottom-rotate");
   
  });

  $('.what-we-do').waypoint(() => {
    $('.what-we-do-img').addClass(' animate__fadeInRight');
    $('.what-we-do .title').addClass("animate__fadeInUp");
    $('.what-we-do .caption').addClass('animate__fadeInUp');
      $(".what-we-do .learn-more").addClass("animate__fadeInUp");
  }, {
    offset: "85%"
  })

  $('.services').waypoint(() => {
    $('.services .service-card').addClass('animate__animated animate__fadeInUp')
  }, { offset: '95%' });
  
   $(".services-two").waypoint(
     () => {
       $(".bg-cover-card").addClass(
         "animate__animated animate__fadeInUp"
       );
     },
     { offset: "85%" }
  );
  

  $('.get-quote').waypoint(() => {
    $('.get-quote .card').addClass('animate__animated animate__fadeInUp');
  }, {offset: "85%"})

})