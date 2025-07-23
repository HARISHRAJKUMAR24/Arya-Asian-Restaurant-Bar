
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


//gallery image view

// Pause animation on hover
document.querySelectorAll('.slide-row').forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.querySelector('.slide-track').style.animationPlayState = 'paused';
    });
    row.addEventListener('mouseleave', () => {
        row.querySelector('.slide-track').style.animationPlayState = 'running';
    });
});

// Lightbox functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.getElementById('closeModal');

// Open modal when image is clicked
document.querySelectorAll('.slide-track img').forEach(img => {
    img.addEventListener('click', () => {
        modal.classList.add('show');
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
});

// Close modal
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

closeBtn.addEventListener('click', closeModal);

// Close when clicking outside image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});