$(document).ready(function(){
  $("#user").submit(function(event) {
    event.preventDefault();
    var side1Input = $("input:#side1").val();
    var side2Input = $("input:#side2").val();
    var side3Input = $("input:#side3").val();

    if (side1Input === side2Input && side1Input === side3Input) {
    $("#equilateral").show();
  } else if (side1Input === side2Input && side1Input > sideInput3) {
    $("#isosceles").show();
  } else if (side1Input === side3Input && side1Input > sideInput2) {
    $("#isosceles").show();
  } else if (side2Input === side3Input && side2Input > side1Input) {
    $("#isosceles").show();
  } else if (side1Input !=== side2Input && side2Input !=== side3Input && side1Input !=== side3Input) {
    $("#scalene").show();
  } else if (side1Input + side2Input <= side3Input || side2Input + side3Input <= side1Input || side1Input + side3Input <= side2Input) {
    $("#not-a-triangle").show();
  }

  });


});
