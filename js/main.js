let slider = $('.slider');
slider.slick({
  dots:true,
  infinite: false,
  arrows: false,
  dotsClass: 'slick-dots',
}) 

let mainSlider = $('.main-slider');
mainSlider.slick({
  dots:false,
  infinite: false,
  arrows: true,
  variableWidth: true,
  adaptiveHeight: true,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
      },
      breakpoint:321,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
      }
    }]
}) 

let footerSlider = $('.footer__slider-slider');
footerSlider.slick({
  dots:false,
  infinite: false,
  arrows: true,
  slidesToShow: 9,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 6,
      },
    breakpoint:321,
    settings: {
      slidesToShow: 2,
      arrows: false,
      dots: true,
    }
    }]
});
  
const newTextString = "SOLD";
const handleClick = event => {
$(event.target).closest(".main__slider-slide").find(".change").html(newTextString)
}
$(".wrapper").on("click", handleClick);