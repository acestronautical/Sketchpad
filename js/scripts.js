var boxSize = 12;
var numBoxes = (460800 / (boxSize * boxSize));
var color = 'rgb(46, 46, 46)'
var newBox = "<div class='box' onmouseover='this.style.backgroundColor = \"" + color + "\";' id='[id]' ></div>";

function boxGen() {
$('#container').empty();

$('#container').append($(Array(460800 / (boxSize * boxSize)).join(newBox)));

};

$(document).ready(function(){

  boxGen(boxSize);

  $('.box').css({"height": boxSize + "px", "width" : boxSize + "px"});

  $('#shake').click(function(){
    $( "#border" ).effect( "shake" );
    $('.box').css('background-color', 'white');
  });

  $('#gridSize').click(function(){
    boxGen();
  });

});
