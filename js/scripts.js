var boxSize = 12;
var numBoxes = (460800 / (boxSize * boxSize));
var color = 'rgb(46, 46, 46)'
var newBox = "<div class='box' onmouseover='this.style.backgroundColor = \"" + color + "\";' id='[id]' ></div>";

function boxGen(boxSize) {
$('#container').empty();
$('#container').append($(Array(460800 / (boxSize * boxSize)).join(newBox)));
$('.box').css({"height": boxSize + "px", "width" : boxSize + "px"});

};

$(document).ready(function(){

  boxGen(boxSize);

  $('#shake').click(function(){
    $( "#border" ).effect( "shake" );
    $('.box').css('background-color', 'white');
  });

  $('#gridSize').click(function(){
    if(boxSize <= 20){
      boxSize += 4;
    } else{
      boxSize = 8;
    }
    boxGen(boxSize);
  });

});
