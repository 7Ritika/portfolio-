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
document.addEventListener('DOMContentLoaded', (event) => {
    // List of image sources
    const projectImages1 = ["path/to/your/image1.jpg", "path/to/your/image2.jpg", "path/to/another/image3.jpg"];
    const projectImages2 = [...]; // Similarly for other projects
    const projectImages3 = [...];

    let currentImageIndex1 = 0;
    let currentImageIndex2 = 0;
    let currentImageIndex3 = 0;

    setInterval(() => {
        currentImageIndex1 = (currentImageIndex1 + 1) % projectImages1.length;
        document.getElementById('project-img-1').src = projectImages1[currentImageIndex1];
    }, 5000); // Change every 5000 milliseconds (5 seconds)

    // Repeat for other images
});

