

$(document).ready(function(){
  let elements=[1,2,3,4]

  elements.forEach((index)=>{
    $('.content'+index).hover(function(){
      $('.hidden-content'+index).toggle();
      $('.content'+index).toggle()
    });

    $('.hidden-content'+index).hover(function(){
      $('.content'+index).toggle();
      $('.hidden-content'+index).toggle()
    });
  });
})