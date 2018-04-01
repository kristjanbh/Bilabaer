$(document).ready(function(){

  var
      feed = new Instafeed({
      get: 'user',
      userId: 6189500824, // Ex: 1374300081
      accessToken: '6189500824.1677ed0.a4fada2e48134f1788223fe12417e410',
      template: '<div class="insta-post"><a href="{{link}}" style="background: url({{image}}) 50% 50% no-repeat; background-size: cover;" rel="me" target="_blank"></a></div>',
      limit: 10,
      resolution: 'standard_resolution',
    });
    feed.run();

  $('.thjonusta').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

});
