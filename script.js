const loading = document.querySelector('#loading');
const container = document.querySelector('.container');

const active = document.querySelector('#active');
const nonactive = document.querySelector('#nonactive');

window.addEventListener('load', function () {
    loading.style.display = "none";
    container.style.filter = "none";
});

active.addEventListener('click', function () {
    loading.style.display = "flex";
    container.style.filter = "blur(4px)";
});

nonactive.addEventListener('click', function () {
    loading.style.display = "none";
    container.style.filter = "none";
});