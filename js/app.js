// different practices
$(document).ready(function (){

  $('#toggle').click(function (){
    $('li').toggle() //show the list
    alert("Do you want toggle up the list!");
    console.log("Event type: " + eventObj.type);
    console.log("Button or key pressed: " + eventObj.which);
    console.log("Target element: " + eventObj.target);
    console.log("Mouse X coordinate: " + eventObj.pageX);
    console.log("Mouse Y coordinate: " +eventObj.pageY);
  });

  $('#fadetoggle').click(function (){
// chaining of effects or animations
    $('li')
      .slideUp(3000)
      .delay(3000)
      .slideDown(3000)
      .fadeOut(2000)
      .delay(3000)
      .fadeIn(2000)
      .fadeToggle(3000);
  })
// get method functionality
  $("#weather").click(function() {
    jQuery.get("https://api.weather.gov", function(data, textStatus)
      {alert("Data (id): " + data.id +
          "\nData (weather): " + data.weather +
          "\ntextStatus: " + textStatus);
        //$("div").text("Current Weather: " + data.weather + "°C") // to display data on web page
      },
      "json");
  })
// http://www.seocheckpoints.com/my-ip-address

  $("#findIP").click(function() {
    websiteURL = $("#ip").val()
    jQuery.post("https://5f28559af5d27e001612eebf.mockapi.io/findIP/", {
        "website": websiteURL},
     /*function(data, textStatus) {
        alert("Data (id): " + data.id +
          "\nData (Website): " + data.website +
          "\nData (IP): " + data.ip +
          "\ntextStatus: " + textStatus);
      }, */
     function(data, textStatus) {
      $(".addIP").text('IP of website "' + data.website + '" is "' + data.ip + '"')
      },
      "json");
  })

  $("a").click(function(eventObj) {
    var isChecked = $('#mycheck').is(":checked")
    if (!isChecked) {
      eventObj.preventDefault();
      alert("Please check the terms and conditions to access the website!")
    }
  });

});

// adding task to to-do-list

$(document).ready(function() {
  // code for get request and task addition goes here
  $("#import").click(function() {
    jQuery.get("https://5f28559af5d27e001612eebf.mockapi.io/tasks/",
      function(data,textStatus){
        // extracting the list of tasks from server response
        todoTasks = data.tasks
        // iterating over the list and adding each task one by one
        for (index = 0; index < todoTasks.length; index++) {
          var taskElement = $("<div> </div>")
          taskElement.addClass("new-task");
          taskElement.text(todoTasks[index])

          var deleteBtnElement = $("<button id='delete'></button>")
          deleteBtnElement.addClass("fas fa-trash-alt")

          var doneBtnElement = $("<button id='done'></button>")
          doneBtnElement.addClass("fas fa-check")

          taskElement.append(doneBtnElement,deleteBtnElement)
          $('.notCompleted').append(taskElement)
        }

      },"json");
  })

// done and delete functions goes here
  $("div").on("click", "#done", function() {
    var taskElement = $(this).parent()
    $(this).remove()
    taskElement.fadeOut(2000,function(){
      var detachedTask = taskElement.detach()
      detachedTask.fadeIn(2000,function(){
        $(".completed").append(detachedTask)
      }) // instead of another callback we can use this other way as below
      //$(".completed").append(detachedTask)
      //             // fading the task back in
      //             detachedTask.fadeIn(1000);
    })
  })

  $("div").on("click", "#delete", function(){
    // code for event handler function
    var taskToDelete = $(this).parent()
   taskToDelete.fadeOut(4000,function (){
     taskToDelete.remove()
   })
  })

});
// main functionality goes here

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
