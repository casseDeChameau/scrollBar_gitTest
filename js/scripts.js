// -------------------------    VARIABLES   ------------------ //
let hWindow = window.innerHeight;
let hPage = document.querySelector('body').clientHeight;
let scrollZero = hPage - hWindow;
let scrollBar = document.querySelector('.scrollBar');
// ========================     METHODS      ===================== //
window.addEventListener('scroll', function () {
    let currentScroll = window.scrollY - 20;
    let percentage = (currentScroll / scrollZero * 100);
    console.log(hPage, hWindow, scrollZero, currentScroll, percentage);
    scrollBar.style.width = `${percentage}%`;
});