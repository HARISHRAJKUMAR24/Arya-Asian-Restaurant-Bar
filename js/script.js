
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



document.addEventListener('DOMContentLoaded', function () {
    const upBtn = document.getElementById('up_btn');
    const scrollContainer = document.querySelector('.menu-content');

    function toggleUpButton(scrollTopValue) {
        if (scrollTopValue > 100) {
            upBtn.classList.add('show');
        } else {
            upBtn.classList.remove('show');
        }
    }

    // On page load
    toggleUpButton(scrollContainer ? scrollContainer.scrollTop : window.scrollY);

    // Mobile scroll
    window.addEventListener('scroll', function () {
        toggleUpButton(window.scrollY);
    });

    // Desktop scroll
    if (scrollContainer) {
        scrollContainer.addEventListener('scroll', function () {
            toggleUpButton(scrollContainer.scrollTop);
        });
    }
});
