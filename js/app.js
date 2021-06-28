
$(document).ready(function (){

  $('#hide').click(function(eventObj){
    $('li').hide() //hides the list
    alert("Are you okay to hide the list!");
    console.log("Event type: " + eventObj.type);
    console.log("Button or key pressed: " + eventObj.which);
    console.log("Target element: " + eventObj.target);
    console.log("Mouse X coordinate: " + eventObj.pageX);
    console.log("Mouse Y coordinate: " +eventObj.pageY);
  });


  $('#show').click(function (){
    $('li').show() //show the list
    alert("Do you want to show up the list!");
  });

  $("a").click(function(eventObj) {
    var isChecked = $('#mycheck').is(":checked")
    if (!isChecked) {
      eventObj.preventDefault();
      alert("Please check the terms and conditions to access the website!")
    }
  });

});

// adding task to to-do-list
$(document).ready(function () {
  $("div").on("click", "#done", function() {
    var taskElement = $(this).parent()
    $(this).remove()
    var detachedTask = taskElement.detach()
    $(".completed").append(detachedTask)

  })

  $("div").on("click", "#delete", function(){
    // code for event handler function
    var taskToDelete = $(this).parent()
    taskToDelete.remove()
  })

});

$(document).ready(function () {

  $('#addTask').click(function (eventObj){
    var task = $('.textBox').val()

    if (!task) {
      eventObj.preventDefault();
      alert("Please enter a task before clicking the Add button!")
    }
    else{
      alert("New Task : " + task);
      var taskElement = $("<div> </div>")
      taskElement.addClass("new-task");
      taskElement.text($('.textBox').val())

      var deleteBtnElement = $("<button id='delete'></button>")
      deleteBtnElement.addClass("fas fa-trash-alt")

      var doneBtnElement = $("<button id='done'></button>")
      doneBtnElement.addClass("fas fa-check")

      taskElement.append(doneBtnElement,deleteBtnElement)
        $('.notCompleted').append(taskElement)

      task = $('.textBox').val("");// clears the input box

    }
  });

});

$(document).ready(function () {
  $("#addTask").hover(function() {
      $("#addTask").css("color", "teal");
    },
    function() {
      $("#addTask").css("color", "black");
    });
  $('h3').hover(function (){
    $('h3').css("color", "teal");
  }, function (){
    $('h3').css("color", "black");
    });
});

// code to test remove and detach function differences
/*$(document).ready(function () {
  $("span").click(function(){
    alert("Span clicked!")
  })

  $("p").click(function(){
    alert("Paragraph clicked!")
  })

  $("#remove").click(function(){
    var removedSpan = $("span").remove()
    window.setTimeout(function(){
      $("div").append(removedSpan)
    }, 5000);
  })

  $("#detach").click(function(){
    var detachedPara = $("p").detach()
    window.setTimeout(function(){
      $("div").append(detachedPara)
    }, 5000);
  })
}); */
