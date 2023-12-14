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
