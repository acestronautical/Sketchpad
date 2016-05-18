$(document).ready(function(){

  var boxSize = 20;
  var numBoxes = (460800 / (boxSize * boxSize));
  var container = $('#container');
  var newBox = "<div class='box' onmouseover='this.style.backgroundColor = \"rgb(46, 46, 46)\";' id='[id]' ></div>";

  for(i = 1; i <= numBoxes; i++){
    container.append(newBox.replace('[id]', i));
  };

  $('.box').css({"height": boxSize + "px", "width" : boxSize + "px"});


  // $('.box').mouseenter(function(){
  //   $(this).css('background-color','black');
  // });

});
