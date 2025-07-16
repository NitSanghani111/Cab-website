 const content = button.nextElementSibling;
    const icon = button.querySelector('i');
    const isOpen = !content.classList.contains('hidden');

    // Close all open FAQs
    document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
    document.querySelectorAll('.faq-button i').forEach(i => i.classList.remove('rotate-180'));

    // Toggle selected
    if (!isOpen) {
      content.classList.remove('hidden');
      icon.classList.add('rotate-180');
    }
    function toggleFAQ(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            const isOpen = content.classList.contains('max-h-96');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-content').forEach(faq => {
                if (faq !== content) {
                    faq.classList.remove('max-h-96');
                    faq.classList.add('max-h-0');
                    faq.previousElementSibling.classList.remove('bg-gradient-to-r', 'from-primary', 'to-yellow-400', 'text-secondary');
                    faq.previousElementSibling.classList.add('hover:bg-gray-50');
                    faq.previousElementSibling.querySelector('i').classList.remove('rotate-180');
                }
            });
            
            // Toggle current FAQ
            if (isOpen) {
                content.classList.remove('max-h-96');
                content.classList.add('max-h-0');
                button.classList.remove('bg-gradient-to-r', 'from-primary', 'to-yellow-400', 'text-secondary');
                button.classList.add('hover:bg-gray-50');
                icon.classList.remove('rotate-180');
            } else {
                content.classList.remove('max-h-0');
                content.classList.add('max-h-96');
                button.classList.add('bg-gradient-to-r', 'from-primary', 'to-yellow-400', 'text-secondary');
                button.classList.remove('hover:bg-gray-50');
                icon.classList.add('rotate-180');
            }
        }

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Enhanced button interactions
        document.querySelectorAll('a[href^="tel:"], a[href^="https://wa.me/"]').forEach(button => {
            button.addEventListener('click', function(e) {
                this.classList.add('transform', 'scale-95');
                setTimeout(() => {
                    this.classList.remove('transform', 'scale-95');
                }, 150);
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add staggered animation delays
        document.addEventListener('DOMContentLoaded', () => {
            const faqItems = document.querySelectorAll('.bg-white');
            faqItems.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
            });
        });
        // Smooth scroll animations
    
        // Observe all cards and sections
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.card-hover, .animate-fade-in');
            
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });

        // Add hover effects to service cards
        document.querySelectorAll('.card-hover').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });