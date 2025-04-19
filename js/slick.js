$(function () {
  $(".q-a-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".q-a-gallery-list-left",
    nextArrow: ".q-a-gallery-list-right",
  });
});

$(function () {
  $(".q-a-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    centerMode: true,
    cssEase: "linear",
    prevArrow: ".q-a-reviews-list-left",
    nextArrow: ".q-a-reviews-list-right",
  });
});
