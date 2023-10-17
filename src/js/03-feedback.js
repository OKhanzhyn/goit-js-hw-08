
import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
// const email = document.querySelector("input");
// const message = document.querySelector("textarea");

form.addEventListener("input", throttle(saveInput, 500));
form.addEventListener('submit', onSubmitForm);
document.addEventListener('DOMContentLoaded', renderForm);

const LS_KEY = 'feedback-form-state';
const userData = {};

function saveInput(event) {
    userData[event.target.name] = event.target.value;
    const savingData = JSON.stringify(userData);
    localStorage.setItem(LS_KEY, savingData);
    console.log(userData);
    // Тут потрібно дістати значення з імпутів у юзерДата і зберігти у локалсторедж
}

function renderForm() {
 // тут потрібно дістати данні з локалсторедж і відмалювати форму   
    const itemDitalesLoading = localStorage.getItem(LS_KEY) ;
    const {email, message} = JSON.parse(itemDitalesLoading);
    if (email) {
    email.value = email;
    userData.email = email; 
    console.log(email);}

    if (message) {  
    message.value = message;
    userData.message = message; 
    console.log(message); } 
}

function onSubmitForm(event) {
// потрібно зробити перевірку на пусті інпутию В консоль вивести обєкт юзерДата. Почистити локалсторедж, почистити форму і обєкт юзерДата
event.preventDefault();
event.currentTarget.reset();
localStorage.removeItem(LS_KEY);
form.reset();
userData = {};
console.log(userData);
}








// const email = document.querySelector("input");
// const message = document.querySelector("textarea");

// const localStorageKey = "feedback-form-state";
// const data = {};

// form.addEventListener("input", throttle(saveInput, 500));
// window.onload = loadInput();

// function saveInput(event) {
//     data[event.target.name] = event.target.value;
//     const savingData = JSON.stringify(data);
//     localStorage.setItem(localStorageKey, savingData);
//     console.log(data);
// };

// function loadInput() {
//   const itemDitalesLoading = localStorage.getItem(localStorageKey) ;
//   const itemDitales = JSON.parse(itemDitalesLoading);
  
//   email.value = email;
//   itemDitales.email = email; 
//   console.log(email);  
//   message.value = message;
//   itemDitales.message = message; 
//   console.log(message);  
// };



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