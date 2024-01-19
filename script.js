function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

    
    
}
function navigateToContact() {
    // Reset the hash
    window.location.hash = '';
    // Set the hash to #contact
    window.location.hash = 'contact';
}
