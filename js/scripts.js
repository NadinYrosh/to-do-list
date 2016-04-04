//business logic
function Places(Name, Landmark, TimeOfYear, Notes) {
  this.inputName = Name;
  this.inputLandmark = Landmark;
  this.inputTimeOfYear = TimeOfYear;
  this.inputNotes = Notes;
}

// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();


    var inputtedName = $("input#place-one").val();
    var inputtedLandmarks = $("input#place-two").val();
    var inputtedYear = parseInt($("input#place-three").val());
    var inputtedNotes = $("input#place-four").val();

    var newPlace = new Places(inputtedName, inputtedLandmarks, inputtedYear, inputtedNotes);
    $("ul#list").append("<li><span class = 'rightSide'>" + newPlace.inputName + "</span></li>");

    $("ul#list").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.inputName);
      $(".inputtedName").text(newPlace.inputName);
      $(".inputtedLandmarks").text(newPlace.inputLandmark);
      $(".inputtedYear").text(newPlace.inputTimeOfYear);
      $(".inputtedNotes").text(newPlace.inputNotes);
    });

    // $("input#place-one").val("");
    // $("input#place-two").val("");
    // parseInt($("input#place-three").val(""));
    // $("input#place-four").val("");
  });
});
