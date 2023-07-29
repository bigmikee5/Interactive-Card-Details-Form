// user card number input and number on card
const cardNumber = document.getElementById("number");
const numberInp = document.getElementById("card_number");

// user name input and name on card
const cardName = document.getElementById("name");
const nameInp = document.getElementById("card_name");

// user month input and month on card
const cardMonth = document.getElementById("month");
const monthInp = document.getElementById("card_month");

// user year input and year on card
const cardYear = document.getElementById("year");
const yearInp = document.getElementById("card_year");

// user cvc input and cvc on card
const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("Card_cvc");

// submit button
const submitBtn = document.getElementById("submit_btn");

// completed page
const completed = document.querySelector(".thank");
const form = document.getElementsByTagName("form");

function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
  cardName.innerText = e.target.value;
}
function setCardMonth(e) {
  cardMonth.innerText = e.target.value;
}
function setCardYear(e) {
  cardYear.innerText = e.target.value;
}
function setCardCvc(e) {
  cardCvc.innerText = e.target.value;
}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$&");
}

function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
  cardName.innerText = format(e.target.value);
}
function setCardMonth(e) {
  cardMonth.innerText = format(e.target.value);
}
function setCardYear(e) {
  cardYear.innerText = format(e.target.value);
}
function setCardCvc(e) {
  cardCvc.innerText = format(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
  if (!nameInp.value) {
    nameInp.classList.add("error");
    nameInp.parentElement.classList.add("error_message");
  } else {
    nameInp.classList.remove("error");
    nameInp.parentElement.classList.remove("error_message");
  }
  if (!numberInp.value) {
    numberInp.classList.add("error");
    numberInp.parentElement.classList.add("error_message");
  } else if (numberInp.value.length < 16) {
    numberInp.classList.add("error");
  } else {
    numberInp.classList.remove("error");
    numberInp.parentElement.classList.remove("error_message");
  }
  if (!monthInp.value) {
    monthInp.classList.add("error");
    monthInp.parentElement.classList.add("error_message");
  } else {
    monthInp.classList.remove("error");
    monthInp.parentElement.classList.remove("error_message");
  }
  if (!yearInp.value) {
    yearInp.classList.add("error");
    yearInp.parentElement.classList.add("error_message");
  } else {
    yearInp.classList.remove("error");
    yearInp.parentElement.classList.remove("error_message");
  }
  if (!cvcInp.value) {
    cvcInp.classList.add("error");
    cvcInp.parentElement.classList.add("error_message");
  } else {
    cvcInp.classList.remove("error");
    cvcInp.parentElement.classList.remove("error_message");
  }
  if (
    nameInp.value &&
    numberInp.value &&
    monthInp.value &&
    yearInp.value &&
    cvcInp.value &&
    numberInp.value.length == 16
  ) {
    compeleted.classList.remove("hidden");
    form.classList.add("hidden");
  }
}

numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);
