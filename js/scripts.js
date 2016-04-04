//business logic
function toDo(Name) {
  this.inputtoDo = Name;
}

// user interface logic
$(document).ready(function() {
  $("form#new-toDo").submit(function(event) {
    event.preventDefault();


    var inputtedThing = $("input#thing").val();

    var newThing = new toDo(inputtedThing);
    $("ul#list").append("<li>" + newThing.inputtoDo + "</li>");
    console.log($("ul#list li").last().text());
    $("ul#list li").click(function() {
      $(this).hide();

    });
  });
});
