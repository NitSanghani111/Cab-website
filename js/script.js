   // Mobile menu toggle
      
        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
        });

        // Enhanced navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('nav');
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-glass');
            } else {
                navbar.classList.remove('navbar-glass');
            }
        });

        // Add interactive effects to service cards
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add click effects to buttons
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function (e) {
                // Create ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');

                this.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('#home');
            const heroContent = document.querySelector('.hero-content');

            if (hero && heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Add typing effect to hero title
        const heroTitle = document.querySelector('#home h1');
        if (heroTitle) {
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            let i = 0;

            const typeWriter = () => {
                if (i < text.length) {
                    heroTitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };

            setTimeout(typeWriter, 1000);
        }

        // Add intersection observer for counters
        document.addEventListener("DOMContentLoaded", () => {
            const counters = document.querySelectorAll('.counter');

            const counterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const counter = entry.target;
                        const target = parseInt(counter.getAttribute("data-count"));
                        let current = 0;
                        const increment = target / 100;

                        const updateCounter = () => {
                            if (current < target) {
                                current += increment;
                                counter.textContent = Math.floor(current) + (target > 100 ? '+' : '');
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.textContent = target + (target > 100 ? '+' : '');
                            }
                        };

                        updateCounter();
                        counterObserver.unobserve(counter);
                    }
                });
            }, { threshold: 0.5 }); // Trigger when 50% visible

            counters.forEach(counter => {
                counterObserver.observe(counter);
            });
        });

        // Add CSS for ripple effect
        const style = document.createElement('style');
        style.textContent = `
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            button {
                position: relative;
                overflow: hidden;
            }
        `;
        document.head.appendChild(style);
        