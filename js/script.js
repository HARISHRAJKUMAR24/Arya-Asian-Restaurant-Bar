
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


// Show/hide "Go to Top" button
window.addEventListener("scroll", function () {
    const btn = document.getElementById("goTopBtn");
    if (window.scrollY > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



