// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});

// Scroll to Section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    }
}

// Add click event listeners to all navigation links
const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const sectionId = e.target.getAttribute('data-section');
        scrollToSection(sectionId);
    });
});

// Active Section Detection on Scroll
function updateActiveSection() {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                // Remove active class from all links
                document.querySelectorAll('.nav-link, .nav-link-mobile').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to current section links
                document.querySelectorAll(`[data-section="${sectionId}"]`).forEach(link => {
                    link.classList.add('active');
                });
                
                break;
            }
        }
    }
}

// Listen for scroll events
window.addEventListener('scroll', updateActiveSection);

// Download Resume Button
const downloadResumeBtn = document.getElementById('downloadResumeBtn');
downloadResumeBtn.addEventListener('click', () => {
    alert('Resume download would start here. Please add your resume file to enable this feature.');
});

// Initialize active section on page load
updateActiveSection();
