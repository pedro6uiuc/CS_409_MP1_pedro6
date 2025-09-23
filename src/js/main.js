/* Your JS here. */
const btns = document.getElementById("navbar_text").children;
const About = document.getElementById("About");
const Computer_Science = document.getElementById("Computer_Science");
const Hobbies = document.getElementById("Hobbies");
const Parents = document.getElementById("Parents");
const Navbar = document.getElementById("navbar");
const h_left_btn = document.getElementById("prev_h");
const h_right_btn = document.getElementById("next_h");
const hobbies_list = document.getElementsByClassName("slide");
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
btns[3].addEventListener('click', () =>{
    Parents.scrollIntoView();
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
window.addEventListener('scroll', ()=>{
    var navbar_position = Navbar.getBoundingClientRect();
    var about_position = About.getBoundingClientRect();
    var cs_position = Computer_Science.getBoundingClientRect();
    var hobbies_position = Hobbies.getBoundingClientRect();
    var parents_position = Parents.getBoundingClientRect();
    if(navbar_position.bottom >= about_position.top && navbar_position.bottom<=about_position.bottom){
        btns[0].style.backgroundColor= '#f1b151';
    }
    else{
        btns[0].style.backgroundColor= '';
    }
    if(navbar_position.bottom >= cs_position.top && navbar_position.bottom<=cs_position.bottom){
        btns[1].style.backgroundColor= '#f1b151';
    }
    else{
        btns[1].style.backgroundColor= '';
    }
    if(navbar_position.bottom >= hobbies_position.top && navbar_position.bottom<=hobbies_position.bottom){
        btns[2].style.backgroundColor= '#f1b151';
    }
    else{
        btns[2].style.backgroundColor= '';
    }
    if(navbar_position.bottom >= parents_position.top){
        btns[3].style.backgroundColor= '#f1b151';
    }
    else{
        btns[3].style.backgroundColor= '';
    }
})
var h_position = 0;
const n_hobbies = hobbies_list.length;
h_left_btn.addEventListener('click',()=>{
    hobbies_list[h_position].style.display = "none";
    h_position = (h_position-1)%n_hobbies;
    if (h_position === -1) { h_position = n_hobbies -1}
    hobbies_list[h_position].style.display = "flex";
})
h_right_btn.addEventListener('click',()=>{
    hobbies_list[h_position].style.display = "none";
    h_position = (Math.abs(h_position+1))%n_hobbies;
    hobbies_list[h_position].style.display = "flex";



})