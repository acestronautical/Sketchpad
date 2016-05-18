var boxSize = 12;
var numBoxes = (460800 / (boxSize * boxSize));
var color = randColor()
var newBox = "<div class='box'></div>";

function boxGen(boxSize) {
$('#container').empty();
$('#container').append($(Array(460800 / (boxSize * boxSize)).join(newBox)));
$('.box').css({"height": boxSize + "px", "width" : boxSize + "px"});
};

function randColor(){
 var rint = Math.round(0xffffff * Math.random());
 return 'rgb(' + (rint >> 16) + ',' + (rint >> 8 & 255) + ',' + (rint & 255) + ')';
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

  $('#rainbow').click(function(){
    if(color != 20){
      color += 4;
    } else{
      color = 8;
    }
  });

});
