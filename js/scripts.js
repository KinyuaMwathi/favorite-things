$(document).ready(function() {
  $("form#favoriteThingsForm").submit(function(event) {
    event.preventDefault();
    const coffee = $("input#coffee").val();
    const cake = $("input#cake").val();
    const color = $("input#color").val();
    const destination = $("input#destination").val();
    const carModel = $("input#carModel").val();

    const formArray = [coffee, cake, color, destination, carModel];
    let newFormArray = [];
    newFormArray.push(cake,coffee,color);
    $("#output01").text(newFormArray[0]);
    $("#output02").text(newFormArray[1]);
    $("#output03").text(newFormArray[2]);
    $("#hidden").show();
  });
});