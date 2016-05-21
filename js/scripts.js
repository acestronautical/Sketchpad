var boxSize = 8;
var numBoxes = (460800 / (boxSize * boxSize));
var id = Math.floor((1 + Math.random()) * 0x10000);
var newBox = "<div class='box' ></div>";
var toggle = 'black';
var pickerColor = 'rgb(example, example, example)';
var oneToFour = 1;
var clickToggle = true;

function boxGen() {
for(i = 1; i <=4; i++){
$('#container' + parseInt(((boxSize - 4)/4))).append($(Array(460800 / (boxSize * boxSize) + 1).join(newBox)));
$("#container" + parseInt(((boxSize - 4)/4)) + " > .box").css({"height": boxSize + "px", "width" : boxSize + "px"});

if(boxSize <= 20){
  boxSize += 4;
} else{
  boxSize = 8;
}
}};

function boxShow(whichContainer){
$(".container").css('display', 'none');
$("#container" + parseInt(whichContainer)).css('display', 'block');
};

function draw(clickToggle){

  $('#border').click(function() {
    clickToggle = !clickToggle;
    console.log(clickToggle);
  });

    $('.box').mouseenter(function(){
      if (clickToggle == true) {
        var color = $(this).css('background-color');
        $(this).css('background-color', colorToggle(color));
      }
  });
};


function colorToggle(color){
  var rint = Math.round(0xffffff * Math.random());
  var randomColor = ('#' + rint.toString(16));
  var black = 'rgb(48, 48, 48)';
  var rgbArray = color.substring(4, color.length-1).replace(/ /g, '').split(',');
  var shade = "rgb("+ (parseInt(rgbArray[0]) - 30) +"," + (parseInt(rgbArray[1]) - 30) + "," + (parseInt(rgbArray[2]) - 30) + ")";
  var unshade = "rgb("+ (parseInt(rgbArray[0]) + 30) +"," + (parseInt(rgbArray[1]) + 30) + "," + (parseInt(rgbArray[2]) + 30) + ")";
  if(toggle === 'rainbow'){
    return(randomColor);
  } else if(toggle === 'black'){
    return(black);
  } else if(toggle === 'shading'){
    return(shade);
  } else if(toggle === 'unshading'){
    return(unshade);
  } else if(toggle === 'picker'){
    return(pickerColor);
  }
};

$(document).ready(function(){

  boxGen(boxSize);

  boxShow(oneToFour);

  draw(clickToggle);




  $('#shake').click(function(){
    $( "#border" ).effect( "shake" );
    $("#container" + parseInt(oneToFour) + " > .box").css('background-color', 'white');
  });

  $('#rainbow').click(function(){
    if(toggle != 'rainbow'){
      toggle = 'rainbow';
    } else if(toggle == 'rainbow'){
      toggle = 'black';
    }
  });

  $('#shading').click(function(){
    if(toggle != 'shading'){
      toggle = 'shading';
    } else if(toggle == 'shading'){
      toggle = 'unshading';
    }
  });

  $('#colorPicker').click(function(){
    if(toggle != 'picker'){
      toggle = 'picker';
    }
    pickerColor = ('#0' + Math.round(0xffffff * Math.random()).toString(16)).replace(/^#0([0-9a-f]{6})$/i, '#$1');
    $('#colorPicker').css('background-color', pickerColor);

  });

  $('#gridSize').click(function(){
    if(oneToFour < 4){
      oneToFour += 1;
    } else{
      oneToFour = 1;
    }
    boxShow(oneToFour);
  });




});
