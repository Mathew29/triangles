$(document).ready(function(){
  $("#user").submit(function(event) {
    event.preventDefault();
    var side1Input = parseInt($("input#side1").val());
    var side2Input = parseInt($("input#side2").val());
    var side3Input = parseInt($("input#side3").val());

    if (side1Input === side2Input && side1Input === side3Input) {
      $("#equilateral").show();
    } else if (side1Input === side2Input && side1Input > side3Input) {
      $("#isosceles").show();
    } else if (side1Input === side3Input && side1Input > side2Input) {
      $("#isosceles").show();
    } else if (side2Input === side3Input && side2Input > side1Input) {
      $("#isosceles").show();
    } else if (side1Input != side2Input && side2Input != side3Input && side1Input != side3Input) {
      $("#scalene").show();
    } else if (side1Input + side2Input <= side3Input || side2Input + side3Input <= side1Input || side1Input + side3Input <= side2Input) {
      $("#not-a-triangle").show();
    } else {
      alert("Invalid input try again");
      return;
    }
  });


});
