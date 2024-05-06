let submitButton = document.getElementById('submitButton');

document.getElementById('info').addEventListener('submit', function(event) {

    event.preventDefault(); //prevent form submission



    });
//deploy to separate branch and use deploy previews
//assignment
// make input fields for person's name w/ submit, then next question appears and original question disappears
// verify if number inputs are numbers
//then age, and location questions individually appear
// input box for open-ended question (e.g. fave food), allow user to enter multiple, and store info in array. add counter that increments with additions. display text "you've added x amount of things"
// let user see array in the UI (either at the time or output when button is clicked)


// plan
//display first question

//use createElement


//event listener for first submit button -- style to hide question 1 (class or ID? change class as "completed" and completed class is style-hidden?) and appear question 2 div, repeat
//or maybe do a loop where it shows the second then third item on the list each time the done button is clicked

//----------------------------------------------
//////from stack overflow:
////// const QUESTIONS = [
// ////    "What is 2+8?", 
// ////    "How many legs does the spider have?", 
//////     "what is the capital of Russia?"
// //// ];
 
//  ////let counter = 0;
//////  let display = document.querySelector('h3');
// //// display.innerText = QUESTIONS[counter]
 
// //// let btn = document.getElementById('next');
 
// //// btn.addEventListener('click', ()=>{
//   ////  counter++;
//  ////   display.innerText = QUESTIONS[counter]
// //// })

//----------------------------------------------

///////2nd stack overflow option https://stackoverflow.com/questions/38834069/showing-next-input-field-when-filled-in-using-next


// for multiple input question, display choices as entered (can they appear like tags with an x?), have a "Add" and "Done" button