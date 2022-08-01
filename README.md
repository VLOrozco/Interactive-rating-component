# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Interactive rating component solution](#frontend-mentor---interactive-rating-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
    - [Mobile View](#mobile-view)
    - [Desktop View](#desktop-view)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Links](#links)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

---
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

---
## Screenshots

### Mobile View
<img src="./images/mobileView.png" alt="Officelite Coming Soon Site in mobile view" width="50%"/>

### Desktop View
<img src="./images/desktopView.png" alt="Officelite Coming Soon Site in desktop view" width="120%"/>

---
## My process

### Built with

- HTML5
- CSS
- CSS Flexbox
- JavaScript | getValue() & submitFunction()
- Mobile-first workflow

---
### Links

- Solution URL: [Github Code](https://github.com/VLOrozco/Interactive-rating-component.git)

- Live Site URL: [Interactive Rating Component](https://vlorozco.github.io/Interactive-rating-component/)

---
### What I learned
Monday, August 1, 2022 |
*The main challenge I had with this project was getting each individual rate to output the value on click. I was able to create a solution to my problem from a post on [Stack Overflow](https://stackoverflow.com/questions/68680000/output-the-value-of-multiple-buttons-in-the-console-log).*

**Here is my JS solution for getting the value of each individual rate:**
```js
// FINAL SELECTED RATING
var starRating = document.getElementById('rating');

// GET VALUE() & OUTPUT TO STAR RATING ON TY CONTAINER
function getValue() {
  // OUTPUT SELECTED RATING
  starRating.innerText = this.value;
}

// GET BUTTONS AND DECLARE AS RATES
var rates = document.querySelectorAll('.rtg');

// FOR EACH RATE | ON CLICK | CALL getValue FUNCTION
rates.forEach(rate => {
  rate.addEventListener('click', getValue, true);
})
```


---
### Useful resources

- Output the value of multiple buttons in the console.log: [Stack Overflow](https://stackoverflow.com/questions/68680000/output-the-value-of-multiple-buttons-in-the-console-log)

---

## Author

- VLOrozco Portolio Website - [Veronica L. Orozco](https://vlorozco.com)
- Github - [Veronica L. Orozco](https://github.com/VLOrozco)
- Frontend Mentor - [@VLOrozco](https://www.frontendmentor.io/profile/VLOrozco)
- Codecademy - [orozcov3](https://www.codecademy.com/profiles/orozcoV3)

---
## Acknowledgments

Thank you to [David Morgade](https://www.frontendmentor.io/profile/DavidMorgade), Frontend Mentor Community Member, for your support in good practices for my event listeners and for helping me with the solution to a well functioning `submitFunction` that checks for input before submitting. I appreciate your support and time sharing your knowledge with me!

Solution code snippet shared by David:
```js
function submitFunction() {
  const starRating = document.getElementById('rating');
  if (starRating.textContent <= 0) return alert('You need to select a rating!');
  ratingStartContainer.style.display = 'none';
  tyStartContainer.style.display = 'block';
}
```