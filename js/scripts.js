var boxSize = 12;
var numBoxes = (460800 / (boxSize * boxSize));
var color = 'hsl(0, 0%, 20%)'
var id = Math.floor((1 + Math.random()) * 0x10000);
var newBox = "<div class='box' id=" + id + "  ></div>";
var toggle = 0;

function boxGen() {
$('#container').empty();
$('#container').append($(Array(460800 / (boxSize * boxSize)).join(newBox)));
$('.box').css({"height": boxSize + "px", "width" : boxSize + "px"});
};

function randToggle(){

  var rint = Math.round(0xffffff * Math.random());
  var randomColor = 'rgb(' + (rint >> 16) + ',' + (rint >> 8 & 255) + ',' + (rint & 255) + ')';
  var black = 'hsl(0, 0%, 20%)';
  if(toggle === 'rainbow'){
    return(randomColor);
  } else{
    return(black);
  }
};

$(document).ready(function(){

  boxGen(boxSize);

  $('.box').mouseenter(function(){
    $(this).css('background-color', randToggle());
  })

  $('#shake').click(function(){
    $( "#border" ).effect( "shake" );
    $('.box').css('background-color', 'white');
  });

  $('#gridSize').click(function(){
    if(boxSize <= 20){
      boxSize += 4;
    } else{
      boxSize = 8;
    };
    boxGen(boxSize);

    $('.box').mouseenter(function(){
      $(this).css('background-color', randToggle());
    });
  });

  $('#rainbow').click(function(){
    if(toggle != 'rainbow'){
      toggle = 'rainbow';
    } else if(toggle == 'rainbow'){
      toggle = 'black';
    }
  });


});
