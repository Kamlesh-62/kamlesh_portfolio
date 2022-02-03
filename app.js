const init = () => {
    clickEvent()
}
//  on individual navbar link click show particular section...
const homeLink = document.querySelector(".home-link");
const aboutLink = document.querySelector(".about-link");
const portfolioLink = document.querySelector(".portfolio-link");
const skillsLink = document.querySelector(".skills-link");
const contactLink = document.querySelector(".contact-link");
const hamburgerButton = document.querySelector(".hamburger-menu");


// store all section in variables..
const aboutSection = document.querySelector(".about");
const homeSection = document.querySelector(".home-section");
const skillsSection = document.querySelector(".skills");
const contactSection = document.querySelector(".get-in-touch-and-contact");
const portfolioSection = document.querySelector(".portfolio");
const menu = document.querySelector(".left-section");

const clickEvent = () =>{
    // 
    homeLink.addEventListener("click", function(){
        homeSection.classList.add("show")
        aboutSection.classList.remove("show")
        portfolioSection.classList.remove("show")
        skillsSection.classList.remove("show")
        contactSection.classList.remove("show")
    })
    aboutLink.addEventListener("click", function(e){
        homeSection.classList.remove("show")
        aboutSection.classList.add("show")
        portfolioSection.classList.remove("show")
        skillsSection.classList.remove("show")
        contactSection.classList.remove("show")
    })
    portfolioLink.addEventListener("click", function(e){
        homeSection.classList.remove("show")
        aboutSection.classList.remove("show")
        portfolioSection.classList.add("show")
        skillsSection.classList.remove("show")
        contactSection.classList.remove("show")
    })
    skillsLink.addEventListener("click", function(e){
        homeSection.classList.remove("show")
        aboutSection.classList.remove("show")
        portfolioSection.classList.remove("show")
        skillsSection.classList.add("show")
        contactSection.classList.remove("show")
    })
    contactLink.addEventListener("click", function(e){
        homeSection.classList.remove("show")
        aboutSection.classList.remove("show")
        portfolioSection.classList.remove("show")
        skillsSection.classList.remove("show")
        contactSection.classList.add("show")
    })
    
    hamburgerButton.addEventListener("click", function(){
        hamburgerButton.classList.toggle("visiable")
        menu.classList.toggle("open")

    })
    
}


init();