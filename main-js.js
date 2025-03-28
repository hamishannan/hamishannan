// Main JavaScript for Hamish Annan website

document.addEventListener('DOMContentLoaded', function() {
    // Current year for copyright
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll state
    const navbar = document.getElementById('main-nav');
    
    function updateNavbar() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Initial call to set correct state
    updateNavbar();
    
    // Listen for scroll events
    window.addEventListener('scroll', updateNavbar);
    
    // Work filtering (if on the works page)
    const filterTabs = document.querySelectorAll('.filter-tab');
    const workItems = document.querySelectorAll('.work-card');
    
    if (filterTabs.length > 0 && workItems.length > 0) {
        filterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                filterTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                // Filter works
                workItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // FAQ toggle (if on coaching page)
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            
            question.addEventListener('click', function() {
                // Toggle active class
                item.classList.toggle('active');
                
                // Toggle answer visibility
                if (item.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = '0';
                }
            });
        });
    }
    
    // Form submission with Formspree (if on contact page)
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const statusMessage = document.getElementById('form-status');
            const formData = new FormData(contactForm);
            
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    statusMessage.innerHTML = "Thanks for your message! I'll get back to you soon.";
                    contactForm.reset();
                } else {
                    response.json().then(data => {
                        if (Object.hasOwnProperty.call(data, 'errors')) {
                            statusMessage.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            statusMessage.innerHTML = "Oops! There was a problem submitting your form.";
                        }
                    });
                }
            })
            .catch(error => {
                statusMessage.innerHTML = "Oops! There was a problem submitting your form.";
            });
        });
    }
});