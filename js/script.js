
function toggleOverlay() {
    const overlay = document.getElementById("fullscreenNav");
    overlay.classList.toggle("active");
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleOverlay() {
    const overlay = document.getElementById("fullscreenNav");
    overlay.classList.toggle("active");
}
