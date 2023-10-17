
import throttle from 'lodash.throttle';

const email = document.querySelector("input");
const message = document.querySelector("textarea");
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const data = {};

form.addEventListener("input", throttle(saveInput, 500));
window.onload = loadInput();

function saveInput(event) {
    data[event.target.name] = event.target.value;
    const savingData = JSON.stringify(data);
    localStorage.setItem(localStorageKey, savingData);
    console.log(data);
};

function loadInput() {
  const itemDitalesLoading = localStorage.getItem(localStorageKey) ;
  const itemDitales = JSON.parse(itemDitalesLoading);
  
  email.value = email;
  itemDitales.email = email; 
  console.log(email);  
  message.value = message;
  itemDitales.message = message; 
  console.log(message);  
};



// const form = document.querySelector(".feedback-form");
// const localStorageKey = "feedback-form-state";

//   form.elements.message.value = localStorage.getItem(localStorageKey) ?? "";

// // form.elements.email.value = localStorage.getItem(localStorageKey) ?? "";

// form.addEventListener("input", (evt) => {
//   localStorage.setItem(localStorageKey, evt.target.value);


// });

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   localStorage.removeItem(localStorageKey);
//   form.reset();
  
// });
// console.log(email.value);
//   console.log(message.value);