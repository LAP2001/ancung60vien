//Get the button
var mybutton = document.getElementById("myBtn");
// topFunction
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // transition when click to top
    document.body.style.transition = "all 0.5s";
    document.documentElement.style.transition = "all 0.5s";


}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()


};
// scrollFunction
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";

    } else {
        mybutton.style.display = "none";
    }
}

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const imageWidth = slider.getBoundingClientRect().width;

let currentPosition = 0;

prevButton.addEventListener('click', () => {
    currentPosition += imageWidth;
    if (currentPosition >= 0) {

        currentPosition = -(imageWidth * (slider.children.length - 1));
    }
    if (currentPosition === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
});

nextButton.addEventListener('click', () => {
    currentPosition -= imageWidth;
    if (currentPosition <= -(imageWidth * (slider.children.length - 1))) {
        currentPosition = 0;
    }
    slider.style.transform = `translateX(${currentPosition}px)`;
    prevButton.style.display = 'block';
});
