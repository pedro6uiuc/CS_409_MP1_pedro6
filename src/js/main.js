/* Your JS here. */
const btns = document.getElementById("navbar_text").children;
const About = document.getElementById("About");
const Computer_Science = document.getElementById("Computer_Science");
const Hobbies = document.getElementById("Hobbies");
const Navbar = document.getElementById("navbar");
btns[0].addEventListener('click',()=>{
    About.scrollIntoView();
    Navbar.style.height = '10%';
}); 
btns[1].addEventListener('click',()=>{
    Computer_Science.scrollIntoView();
    Navbar.style.height = '10%';
}); 
btns[2].addEventListener('click', () =>{
    Hobbies.scrollIntoView();
    Navbar.style.height = '10%';
})
window.addEventListener('scroll', ()=>{
        var max = window.innerHeight/5;
        if (window.scrollY > max) {
            navbar.style.height = '10%'; // Example: shrink padding
            // Add other style changes here
        } else {
            navbar.style.height = '20%'; // Example: restore initial padding
            // Restore other initial styles here
        }
})