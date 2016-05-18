boxSize = 12;
var numBoxes = (460800 / (boxSize * boxSize));
var container = $('#container');
var newBox = "<div class='box' onmouseover='this.style.backgroundColor = \"rgb(46, 46, 46)\";' id='[id]' ></div>";

function boxGen(boxSize) {
container.empty();

for(i = 1; i <= (460800 / (boxSize * boxSize)); i++){
  container.append(newBox.replace('[id]', i));
}
// $(Array(460800 / (boxSize * boxSize)).join(newBox));
};

$(document).ready(function(){
  boxGen(boxSize);
  $('.box').css({"height": boxSize + "px", "width" : boxSize + "px"});

  $('#shake').click(function(){
    $( "#border" ).effect( "shake" );
    $('.box').css('background-color', 'white');
  });

  $('#gridSize').click(function(){
    if(boxSize <= 30){
      boxSize += 6;
    } else{
      boxSize = 12;
    };
    boxGen(boxSize);
    $( "#border" ).effect( "shake" );
  });

});
