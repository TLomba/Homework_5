// # 05 Third-Party APIs: Work Day Scheduler

// Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

// You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

// ## User Story

// ```
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```

// ## Acceptance Criteria

// ```
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// ----------- text block created in block
// THEN I can enter an event
// WHEN I click the save button for that timeblock atrribute same index as block
//------------store local
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```

// The following animation demonstrates the application functionality:

// ![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

// ## Review

// You are required to submit the following for review:

// * The URL of the deployed application.

// * The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

// - - -
// © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

// as soon as i open my page get document on ready

// Create time blocks with sub divs
// use jQuery to add event listener, blocks
//bunch of rows and 3 colums
// col 1. time with text moved to the side and borders added, attribute added to target
// col 2. text box, which needs attribute to help differentiate it
// col 3. save box, which will locally save whats in the box, needs atrributes aswell

// ----------------------------------------------------------------
// ------------------------------------------------------------------
// DEPENDENCIES =========================================================
var currentDay = document.querySelector("#currentDay");

//TODO: as soon as I open my page get document on ready - this is the beginning! Woo Hoo
$(document).ready(function () {
  console.log("ready!");
});

// TO GET THE CURRENT DATE -  hold on to your seat, you will see the date now, found online!
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
//January is 0!
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;
currentDay.append(today);
// document.write(today);
// yeah BOY... CURRENT TIME - DONE

// gets the current of the user when are on the website
function myHour() {
  var d = new Date();
  var n = d.getHours();
  return parseInt(n);
}

console.log(myHour());

//in each sub div display time on the left, input area in the middle, submit button the the right
//depending on the time of the day, it will diplay differently
//array of time objects

var time = [
  00,
  01,
  02,
  03,
  04,
  05,
  06,
  07,
  08,
  09,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
];

console.log(time);

// STYLING - for loop that iterates through the time array up above si that colors can be applied correctly according to the assignment parameter - to generate the div colors. AHH some added organization with color!

// is element needed - maybe not check this
$(".time-block").each(function (element) {
  console.log(this);
  var timeRow = $(this);
  var now = myHour();
  //   this is going through each attribute that is an id and starting with index 1 and continuing from there
  var time = parseInt(timeRow.attr("id").split("-")[1]);
  console.log(time);
  if (now === time) {
    $(this).addClass("present");
    //if time.key === myHour, then block is red
  }
  if (now > time) {
    $(this).addClass("past");
    //if time.key < myHour, then block is grey
  }
  if (now < time) {
    $(this).addClass("future");
    // if time.key> if time.key < myHour, then block is green
  }
});

// function colorBlock() {
//   for (var i = 0; i < time.length; i++) {
//     if (myHour() === time[i]) {
//       //if time.key === myHour, then block is red
//     }
//     if (myHour() < time[i]) {
//       //if time.key < myHour, then block is grey
//     }
//     if (myHour() > time[i]) {
//       // if time.key> if time.key < myHour, then block is green
//     }
//     // If you are looking at it during off hours and it turns all Yellow
//     //     if (myHour < 09 || myHour > 17){
//     // target the CSS and change the present past and future
//   }
// }

var textArea = document.querySelector("#textArea");

// var saveButton = document.querySelectorAll(".saveBtn");
// var descriptionText = document.querySelector(".description");

// for (let i = 0; i < saveButton.length; i++) {
//   saveButton[i].addEventListener("click", function () {
//     console.log("Button was clicked!");
//     var divHour = event.target.parentNode.getAttribute("id");
//     var description = descriptionText.value.trim();
//     console.log(divHour);
//     console.log(description);
//     storeTasks(divHour, description);
//   });
// }
// // ==================== or ========================

$(".saveBtn").on("click", function () {
  //get nearby values.
  console.log(this);
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  //set items in local storage.
  localStorage.setItem("TaskArray", [time, text]);
});
// Mikes code
$("#hour-9 .description").val(localStorage.getIem("hour-9"));
$("#hour-10 .description").val(localStorage.getIem("hour-10"));
$("#hour-11 .description").val(localStorage.getIem("hour-11"));
$("#hour-12 .description").val(localStorage.getIem("hour-12"));
$("#hour-13 .description").val(localStorage.getIem("hour-13"));
$("#hour-14 .description").val(localStorage.getIem("hour-14"));
$("#hour-15 .description").val(localStorage.getIem("hour-15"));
$("#hour-16 .description").val(localStorage.getIem("hour-16"));
$("#hour-17 .description").val(localStorage.getIem("hour-17"));

var userInputByHour = [
  {
    divHour: "",
    task: "",
  },
];
// push task and the hour into an array and then set storage
function storeTasks(divHour) {
  if (description == "") {
    return;
  }
  // Add new todo text to tods arrat and clear the input
  userInputByHour.push(divHour, description);
  todoInput.value = "";
  // push array
  renderTasks();
  // get storage
}

function storeTodos() {}

// Add new Todo Text to todos array clear the
//   event.target.parentNode
// create function that passes whatever is typed into the array
// scheduleTimes = ["hour: xx", "whatever was typed"]
// function init() {
//     // Write code here to check if there are todos in localStorage
//     // If so, parse the value from localStorage and assign it to the todos variable
//     todos = JSON.parse(localStorage.getItem(“todos”)) || []; <<- short circuit operator
//     // Render todos to the DOM
//     renderTodos();
// }
// function storeTodos() {
//     // Add code here to stringify the todos array and save it to the “todos” key in localStorage
//     localStorage.setItem(“todos”, JSON.stringify(todos));
// }
// // When form is submitted...
// todoForm.addEventListener(“submit”, function (event) {
//     event.preventDefault();
//     var todoText = todoInput.value.trim();
//     // Return from function early if submitted todoText is blank
//     if (todoText === “”) {
//         return;
//     }
