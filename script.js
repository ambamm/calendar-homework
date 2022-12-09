// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add cd desor remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// });



//create global variables 
var buttonEl = $('but9') =$('#hour-9');
var buttonEl = $('but10') =$('#hour-10');
var buttonEl = $('but11') =$('#hour-11');
var buttonEl = $('but12') =$('#hour-12');
var buttonEl = $('but1') =$('#hour-1');
var buttonEl = $('but2') =$('#hour-2');
var buttonEl = $('but3') =$('#hour-3');
var buttonEl = $('but4') =$('#hour-4');
var buttonEl = $('but5') =$('#hour-5');



//using day.js to display date & time IRL
var now = dayjs().format("MMM DD, YYYY A hh:mm:ss a"); 
// dayjs().format() 
$("#lead").text(now);
console.log(now);
startTime();


//local storage 





