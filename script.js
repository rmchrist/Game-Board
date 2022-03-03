var main = function() {

};

$(document).ready(main);

$('.more-btn').on('click' , () => {
  $(event.currentTarget).siblings().toggle()
});
$('.share').on('click' , () => {
   $(event.currentTarget).next().toggle();
});
$('.bell').on('click' , () => {
  $(event.currentTarget).children().toggleClass('active');
})