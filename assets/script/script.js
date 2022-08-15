let address = prompt("Lokasi :");
let today = new Date();
let date = today.getDate() + " " + today.toLocaleString('default', {month: 'long'}) + " " + today.getFullYear() + ", " + today.getHours() + ":" + today.getMinutes();

const locationElement = document.querySelector(".textLocation");
const dateElement = document.querySelector(".textDate");

locationElement.innerText = address;
dateElement.innerText = date;


