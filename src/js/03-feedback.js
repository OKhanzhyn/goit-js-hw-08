
import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(saveInput, 500));
form.addEventListener('submit', onSubmitForm);
document.addEventListener('DOMContentLoaded', renderForm);

const LS_KEY = 'feedback-form-state';
let userData = {};

function saveInput(event) {
    // Тут потрібно дістати значення з імпутів у юзерДата і зберігти у локалсторедж
    userData[event.target.name] = event.target.value;
    const savingData = JSON.stringify(userData);
    localStorage.setItem(LS_KEY, savingData);
    console.log(userData);
    
}

function renderForm() {
    // потрібно дістати днні з локалсторедж і відмалювати форму
    //Робимо запит до LS
    const userDataFromLS = load(LS_KEY);
    //Перевіряємо, щоб LS не був пустий
    if (!userDataFromLS) {
      return;
    }
    //Вибираємо усі елементи форми
    const formElements = form.elements;
    //Записуємо у інпути
    for (const key in userDataFromLS) {
      if (userDataFromLS.hasOwnProperty(key)) {
        formElements[key].value = userDataFromLS[key];
        // Перезаписуємо початковий обьект щоб була можливість дописувати
        if (userDataFromLS[key]) {
          userData[key] = userDataFromLS[key];
        }
      }
    }
  }

  function onSubmitForm(event) {
    // потрібно зробити перевірку на пусті інпути. В консоль вивести обєкт юзерДата. Почистити локалсторедж, почистити форму і обєкт юзерДата
    event.preventDefault();
    const {
      elements: { email, message },
    } = event.currentTarget;
    //Перевірка на пусте поле інпута
    if (email.value === '' || message.value === '') {
      return alert('fill all fields');
    }
    // Виводимо обьект
    console.log(userData);
    // Очищення форми і LS
    localStorage.removeItem(LS_KEY);
    event.currentTarget.reset();
    // чистимо початковий обьект
    userData = {};
  }
  function load(key) {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  }
