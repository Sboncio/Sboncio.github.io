

var colour_picker_foreground = document.getElementById('colour-picker-foreground');
var colour_picker_background = document.getElementById('colour-picker-background');

colour_picker_foreground.onchange = function(){
  document.getElementById("navbar").style[ "background-color"] = colour_picker_foreground.value;
  document.getElementById("name").style[ "color"] = colour_picker_foreground.value;
}

colour_picker_background.onchange = function(){
  document.getElementById("background-colour").style[ "background-color"] = colour_picker_background.value;
  document.getElementById("heading").style[ "background-color"] = colour_picker_background.value;
  document.getElementById("slidecontainer").style[ "background-color"] = colour_picker_background.value;
}

// Update the current slider value (each time you drag the slider handle)
