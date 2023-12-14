// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     initialSlide: 3,
//     coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//     },
// });

// swiper.slideTo(3);

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        document.querySelector(".navbar").style.backgroundColor = "black";
        document.querySelector(".navbar").style.boxShadow = "0 10px 30px #035668";

    } else {
        document.querySelector(".navbar").style.backgroundColor = "transparent";
        document.querySelector(".navbar").style.boxShadow = "none";

    }
}
function showAbout() {
    // document.querySelector("#heroes").classList.add("hidden");
    // document.querySelector("#about").classList.add("show");
    // document.querySelector("#art").classList.add("show");
    // document.querySelector("#resume").classList.remove("show");
    // document.querySelector("#projects").classList.remove("show");
    // document.querySelector("#contact").classList.remove("show");
    document.querySelector("#about-link").classList.add("active");
    document.querySelector("#home-link").classList.remove("active");
    document.querySelector("#resume-link").classList.remove("active");
    document.querySelector("#projects-link").classList.remove("active");
    document.querySelector("#contact-link").classList.remove("active");



}

function showResume() {
    // document.querySelector("#heroes").classList.add("hidden");

    // document.querySelector("#about").classList.remove("show");
    // document.querySelector("#art").classList.remove("show");

    // document.querySelector("#resume").classList.add("show");
    // document.querySelector("#projects").classList.remove("show");
    // document.querySelector("#contact").classList.remove("show");
    document.querySelector("#resume-link").classList.add("active");
    document.querySelector("#about-link").classList.remove("active");
    document.querySelector("#home-link").classList.remove("active");
    document.querySelector("#projects-link").classList.remove("active");
    document.querySelector("#contact-link").classList.remove("active");
}

function showProjects() {
    // document.querySelector("#heroes").classList.add("hidden");

    // document.querySelector("#about").classList.remove("show");
    // document.querySelector("#art").classList.remove("show");

    // document.querySelector("#resume").classList.remove("show");
    // document.querySelector("#projects").classList.add("show");
    // document.querySelector("#contact").classList.remove("show");
    document.querySelector("#projects-link").classList.add("active");
    document.querySelector("#resume-link").classList.remove("active");
    document.querySelector("#about-link").classList.remove("active");
    document.querySelector("#home-link").classList.remove("active");
    document.querySelector("#contact-link").classList.remove("active");
}

function showContact() {
    // document.querySelector("#heroes").classList.add("hidden");

    // document.querySelector("#about").classList.remove("show");
    // document.querySelector("#art").classList.remove("show");

    // document.querySelector("#resume").classList.remove("show");
    // document.querySelector("#projects").classList.remove("show");
    document.querySelector("#contact").classList.add("show");
    document.querySelector("#contact-link").classList.add("active");
    document.querySelector("#projects-link").classList.remove("active");
    document.querySelector("#resume-link").classList.remove("active");
    document.querySelector("#about-link").classList.remove("active");
    document.querySelector("#home-link").classList.remove("active");

}
function showHeroes() {
    // document.querySelector("#about").classList.remove("show");
    // document.querySelector("#art").classList.remove("show");
    // document.querySelector("#contact").classList.remove("show");
    // document.querySelector("#resume").classList.remove("show");
    // document.querySelector("#projects").classList.remove("show");
    document.querySelector("#home-link").classList.add("active");
    document.querySelector("#contact-link").classList.remove("active");
    document.querySelector("#projects-link").classList.remove("active");
    document.querySelector("#resume-link").classList.remove("active");
    document.querySelector("#about-link").classList.remove("active");

}

const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const resumeLink = document.getElementById("resume-link");
const projectsLink = document.getElementById("projects-link");
const contactLink = document.getElementById("contact-link");

homeLink.addEventListener("click", hideNavbar);
aboutLink.addEventListener("click", hideNavbar);
resumeLink.addEventListener("click", hideNavbar);
projectsLink.addEventListener("click", hideNavbar);
contactLink.addEventListener("click", hideNavbar);

function hideNavbar() {
    const navbar = document.querySelector(".navbar-collapse");
    navbar.classList.remove("show");
}