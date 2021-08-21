const darkBtn = document.querySelector('.darkBtn');
const body = document.getElementsByTagName("BODY")[0];
const title = document.querySelectorAll('.title');
const titleLeft = document.querySelectorAll('.title-left');
const menuItem = document.querySelectorAll('.menu-item p');
const settingsItem = document.querySelectorAll('.settings-item');
const accountsItem = document.querySelectorAll('.account-details p');
const accountItem = document.querySelectorAll('.account p');
const dataItem = document.querySelectorAll('.data h1');
const cardItem = document.querySelectorAll('.card h3');
const mainCard = document.querySelectorAll('.main-card');
const singleDetail = document.querySelectorAll('.single-detail h1');
const inputs = document.querySelectorAll('input');
console.log(inputs);

darkBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    title.forEach((item) => {
        item.classList.toggle('light-title');
    })
    inputs.forEach((item) => {
        item.classList.toggle('light-text');
    })
    titleLeft.forEach((item) => {
        item.classList.toggle('light-title');
    })
    menuItem.forEach((item) => {
        item.classList.toggle('light-text');
    })
    settingsItem.forEach((item) => {
        item.classList.toggle('light-text');
    })
    accountsItem.forEach((item) => {
        item.classList.toggle('light-text');
    })
    accountItem.forEach((item) => {
        item.classList.toggle('light-text');
    })
    dataItem.forEach((item) => {
        item.classList.toggle('light-text');
    })
    cardItem.forEach((item) => {
        item.classList.toggle('light-text');
    })
    singleDetail.forEach((item) => {
        item.classList.toggle('light-text');
    })
    mainCard.forEach((item) => {
        item.classList.toggle('light-bg');
    })
})