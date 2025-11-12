

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Mobile Menu Toggle =====
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('mobile-menu-show');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // ===== Smooth Scrolling for Navigation Links =====
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===== Navbar Background Change on Scroll =====
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });
    
});
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Mobile Menu Toggle =====
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('mobile-menu-show');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // ===== Smooth Scrolling for Navigation Links =====
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===== Navbar Background Change on Scroll =====
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });
    
    // ===== Form Validation =====
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');
    
    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validation functions
    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.classList.remove('hidden');
            nameInput.classList.add('border-red-500');
            return false;
        } else {
            nameError.classList.add('hidden');
            nameInput.classList.remove('border-red-500');
            nameInput.classList.add('border-green-500');
            return true;
        }
    }
    
    function validateEmail() {
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.classList.remove('hidden');
            emailInput.classList.add('border-red-500');
            return false;
        } else {
            emailError.classList.add('hidden');
            emailInput.classList.remove('border-red-500');
            emailInput.classList.add('border-green-500');
            return true;
        }
    }
    
    function validateMessage() {
        if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            messageError.classList.remove('hidden');
            messageInput.classList.add('border-red-500');
            return false;
        } else {
            messageError.classList.add('hidden');
            messageInput.classList.remove('border-red-500');
            messageInput.classList.add('border-green-500');
            return true;
        }
    }
    
    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isMessageValid) {
            // Show success message
            successMessage.classList.remove('hidden');
            successMessage.classList.add('success-message-show');
            
            // Log form data (in real app, would send to server)
            console.log('Form Submitted:', {
                name: nameInput.value,
                email: emailInput.value,
                phone: document.getElementById('phone').value,
                message: messageInput.value
            });
            
            // Reset form after 2 seconds
            setTimeout(() => {
                contactForm.reset();
                successMessage.classList.add('hidden');
                // Remove validation classes
                nameInput.classList.remove('border-green-500');
                emailInput.classList.remove('border-green-500');
                messageInput.classList.remove('border-green-500');
            }, 3000);
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Mobile Menu Toggle =====
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('mobile-menu-show');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // ===== Smooth Scrolling for Navigation Links =====
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===== Navbar Background Change on Scroll =====
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });
    
    // ===== Form Validation =====
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');
    
    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validation functions
    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.classList.remove('hidden');
            nameInput.classList.add('border-red-500');
            return false;
        } else {
            nameError.classList.add('hidden');
            nameInput.classList.remove('border-red-500');
            nameInput.classList.add('border-green-500');
            return true;
        }
    }
    
    function validateEmail() {
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.classList.remove('hidden');
            emailInput.classList.add('border-red-500');
            return false;
        } else {
            emailError.classList.add('hidden');
            emailInput.classList.remove('border-red-500');
            emailInput.classList.add('border-green-500');
            return true;
        }
    }
    
    function validateMessage() {
        if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            messageError.classList.remove('hidden');
            messageInput.classList.add('border-red-500');
            return false;
        } else {
            messageError.classList.add('hidden');
            messageInput.classList.remove('border-red-500');
            messageInput.classList.add('border-green-500');
            return true;
        }
    }
    
    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isMessageValid) {
            // Show success message
            successMessage.classList.remove('hidden');
            successMessage.classList.add('success-message-show');
            
            // Log form data (in real app, would send to server)
            console.log('Form Submitted:', {
                name: nameInput.value,
                email: emailInput.value,
                phone: document.getElementById('phone').value,
                message: messageInput.value
            });
            
            // Reset form after 2 seconds
            setTimeout(() => {
                contactForm.reset();
                successMessage.classList.add('hidden');
                // Remove validation classes
                nameInput.classList.remove('border-green-500');
                emailInput.classList.remove('border-green-500');
                messageInput.classList.remove('border-green-500');
            }, 3000);
        }
    });
    
    // ===== Add to Cart Functionality =====
    const addToCartButtons = document.querySelectorAll('.bg-blue-600.text-white.px-4.py-2');
    let cartCount = 0;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            
            // Button animation
            this.textContent = 'Added! ✓';
            this.classList.add('bg-green-600');
            this.classList.remove('bg-blue-600');
            
            // Show notification
            showNotification('Product added to cart!');
            
            // Reset button after 2 seconds
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.classList.remove('bg-green-600');
                this.classList.add('bg-blue-600');
            }, 2000);
        });
    });
    
    // Notification function
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-24 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fadeInUp';
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2500);
    }
    
    // ===== Hero CTA Buttons =====
    const shopNowBtn = document.querySelector('.bg-white.text-blue-600');
    const learnMoreBtn = document.querySelector('.border-2.border-white');
    
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', function() {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // ===== Scroll Animation for Sections =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    console.log('ShopHub: All interactive features loaded successfully!');
});