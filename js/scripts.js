var boxSize = 12;
var numBoxes = (460800 / (boxSize * boxSize));
var id = Math.floor((1 + Math.random()) * 0x10000);
var newBox = "<div class='box' id=" + id + "  ></div>";

var toggle = 'black';
var pickerColor = 'rgb(208, 73, 246)';

function boxGen() {
$('#container').empty();
$('#container').append($(Array(460800 / (boxSize * boxSize)).join(newBox)));
$('.box').css({"height": boxSize + "px", "width" : boxSize + "px"});
};

function randToggle(color){
  var rint = Math.round(0xffffff * Math.random());
  var randomColor = ('#0' + rint.toString(16)).replace(/^#0([0-9a-f]{6})$/i, '#$1');
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

  $('.box').mouseenter(function(){
    var color = $(this).css('background-color');
    $(this).css('background-color', randToggle(color));
  });

  $('#shake').click(function(){
    $( "#border" ).effect( "shake" );
    $('.box').css('background-color', 'white');
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
    if(boxSize <= 20){
      boxSize += 4;
    } else{
      boxSize = 8;
    }
    boxGen(boxSize);

    $('.box').mouseenter(function(){
      var color = $(this).css('background-color');
      $(this).css('background-color', randToggle(color));
    });
  });




});
