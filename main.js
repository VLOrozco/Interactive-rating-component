// RATING START CONTAINER
const ratingStartContainer = document.getElementById('rating-state-start');

// THANK YOU START CONTAINER
const tyStartContainer = document.getElementById('ty-box');


// GET VALUE() & OUTPUT TO STAR RATING ON TY CONTAINER
function getValue() {
  // FINAL SELECTED RATING
  const starRating = document.getElementById('rating');

  // OUTPUT SELECTED RATING
  starRating.innerText = this.value;
}

// GET BUTTONS AND DECLARE AS RATES
var rates = document.querySelectorAll('.rtg');

// FOR EACH RATE | ON CLICK | CALL getValue FUNCTION
rates.forEach(rate => {
  rate.addEventListener('click', getValue, true);
})



// SUBMIT BUTTON
const submit = document.getElementById('submit');

// SUBMIT FUNCTION
function submitFunction() {
  ratingStartContainer.style.display = "none";
  tyStartContainer.style.display = "block";
}