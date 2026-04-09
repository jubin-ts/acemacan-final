/* ============================================
   ACEMACAN — World-Class Digital Studio
   JavaScript
   ============================================ */

(function () {
    'use strict';

    // ---- Preloader ----
    const preloader = document.getElementById('preloader');
    const preloaderCounter = document.querySelector('.preloader-counter');
    const preloaderLine = document.querySelector('.preloader-line');

    let count = 0;
    const preloaderInterval = setInterval(function () {
        count += Math.floor(Math.random() * 3) + 1;
        if (count >= 100) {
            count = 100;
            clearInterval(preloaderInterval);
            setTimeout(function () {
                if (preloader) {
                    preloader.classList.add('hidden');
                    document.body.classList.remove('loading');
                }
            }, 400);
        }
        if (preloaderCounter) {
            preloaderCounter.textContent = count;
        }
        if (preloaderLine) {
            preloaderLine.style.setProperty('--progress', count + '%');
            var after = preloaderLine.querySelector('::after');
            preloaderLine.style.cssText = '';
        }
    }, 30);

    // Set preloader line width via a style injection
    var styleEl = document.createElement('style');
    document.head.appendChild(styleEl);

    var preloaderStyleInterval = setInterval(function () {
        if (preloaderCounter) {
            var w = preloaderCounter.textContent;
            styleEl.textContent = '.preloader-line::after { width: ' + w + '% !important; }';
            if (parseInt(w, 10) >= 100) {
                clearInterval(preloaderStyleInterval);
            }
        }
    }, 30);

    document.body.classList.add('loading');

    // ---- Custom Cursor ----
    var cursor = document.getElementById('cursor');
    var cursorDot = cursor ? cursor.querySelector('.cursor-dot') : null;
    var cursorOutline = cursor ? cursor.querySelector('.cursor-outline') : null;
    var mouseX = 0, mouseY = 0;
    var outlineX = 0, outlineY = 0;

    if (cursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        document.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (cursorDot) {
                cursorDot.style.left = mouseX + 'px';
                cursorDot.style.top = mouseY + 'px';
            }
        });

        function animateCursorOutline() {
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;
            if (cursorOutline) {
                cursorOutline.style.left = outlineX + 'px';
                cursorOutline.style.top = outlineY + 'px';
            }
            requestAnimationFrame(animateCursorOutline);
        }
        animateCursorOutline();

        // Hover state for interactive elements
        var hoverTargets = document.querySelectorAll('a, button, input, textarea, select, .magnetic');
        hoverTargets.forEach(function (el) {
            el.addEventListener('mouseenter', function () {
                cursor.classList.add('hovering');
            });
            el.addEventListener('mouseleave', function () {
                cursor.classList.remove('hovering');
            });
        });
    }

    // ---- Navigation ----
    var nav = document.getElementById('nav');
    var menuBtn = document.getElementById('menuBtn');
    var mobileMenu = document.getElementById('mobileMenu');
    var mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    // Scroll detection for nav background
    var lastScrollY = 0;
    window.addEventListener('scroll', function () {
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        if (nav) {
            if (scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
        lastScrollY = scrollY;
    }, { passive: true });

    // Mobile menu toggle
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function () {
            var isActive = mobileMenu.classList.contains('active');
            mobileMenu.classList.toggle('active');
            menuBtn.classList.toggle('active');
            menuBtn.setAttribute('aria-expanded', String(!isActive));
            mobileMenu.setAttribute('aria-hidden', String(isActive));
            document.body.style.overflow = isActive ? '' : 'hidden';
        });

        mobileMenuLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('active');
                menuBtn.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            });
        });
    }

    // ---- Scroll Reveal ----
    var revealElements = document.querySelectorAll('.reveal-up');

    function checkReveal() {
        var windowHeight = window.innerHeight;
        revealElements.forEach(function (el) {
            var top = el.getBoundingClientRect().top;
            if (top < windowHeight * 0.88) {
                el.classList.add('revealed');
            }
        });
    }

    // Use IntersectionObserver if available
    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        window.addEventListener('scroll', checkReveal, { passive: true });
        checkReveal();
    }

    // ---- Counter Animation ----
    var counters = document.querySelectorAll('.counter');

    if ('IntersectionObserver' in window) {
        var counterObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function (counter) {
            counterObserver.observe(counter);
        });
    }

    function animateCounter(el) {
        var target = parseInt(el.getAttribute('data-count'), 10);
        var duration = 2000;
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out quart
            var eased = 1 - Math.pow(1 - progress, 4);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target;
            }
        }
        requestAnimationFrame(step);
    }

    // ---- Hero Particles ----
    var particleContainer = document.getElementById('heroParticles');

    if (particleContainer) {
        for (var i = 0; i < 40; i++) {
            var particle = document.createElement('div');
            particle.style.cssText = [
                'position: absolute',
                'width: ' + (Math.random() * 3 + 1) + 'px',
                'height: ' + (Math.random() * 3 + 1) + 'px',
                'background: rgba(200, 255, 0, ' + (Math.random() * 0.3 + 0.1) + ')',
                'border-radius: 50%',
                'left: ' + Math.random() * 100 + '%',
                'top: ' + Math.random() * 100 + '%',
                'animation: particleFloat ' + (Math.random() * 20 + 10) + 's ease-in-out infinite',
                'animation-delay: ' + (Math.random() * -20) + 's'
            ].join(';');
            particleContainer.appendChild(particle);
        }

        // Add particle animation keyframes
        var particleStyle = document.createElement('style');
        particleStyle.textContent = '@keyframes particleFloat { 0%, 100% { transform: translate(0, 0); opacity: 0; } 25% { opacity: 1; } 50% { transform: translate(' + (Math.random() * 100 - 50) + 'px, ' + (Math.random() * 100 - 50) + 'px); opacity: 0.8; } 75% { opacity: 1; } }';
        document.head.appendChild(particleStyle);
    }

    // ---- Service Item Hover Effect (Radial Gradient Follow) ----
    var serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(function (item) {
        item.addEventListener('mousemove', function (e) {
            var rect = item.getBoundingClientRect();
            var x = ((e.clientX - rect.left) / rect.width) * 100;
            var y = ((e.clientY - rect.top) / rect.height) * 100;
            item.style.setProperty('--mouse-x', x + '%');
            item.style.setProperty('--mouse-y', y + '%');
        });
    });

    // ---- Work Card 3D Tilt ----
    var workCards = document.querySelectorAll('.work-card');

    workCards.forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
            var rect = card.getBoundingClientRect();
            var x = (e.clientX - rect.left) / rect.width - 0.5;
            var y = (e.clientY - rect.top) / rect.height - 0.5;
            var tiltX = y * -8;
            var tiltY = x * 8;
            card.style.transform = 'perspective(1000px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg) translateY(-8px)';
        });

        card.addEventListener('mouseleave', function () {
            card.style.transform = '';
        });
    });

    // ---- Magnetic Buttons ----
    var magneticElements = document.querySelectorAll('.magnetic');

    magneticElements.forEach(function (el) {
        el.addEventListener('mousemove', function (e) {
            var rect = el.getBoundingClientRect();
            var x = e.clientX - rect.left - rect.width / 2;
            var y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = 'translate(' + (x * 0.2) + 'px, ' + (y * 0.2) + 'px)';
        });

        el.addEventListener('mouseleave', function () {
            el.style.transform = '';
        });
    });

    // ---- Testimonials Slider ----
    var testimonialCards = document.querySelectorAll('.testimonial-card');
    var testimonialDots = document.querySelectorAll('.testimonial-dot');
    var prevBtn = document.getElementById('prevTestimonial');
    var nextBtn = document.getElementById('nextTestimonial');
    var currentTestimonial = 0;
    var testimonialCount = testimonialCards.length;
    var autoSlideInterval;

    function showTestimonial(index) {
        if (index < 0) index = testimonialCount - 1;
        if (index >= testimonialCount) index = 0;
        currentTestimonial = index;

        testimonialCards.forEach(function (card, i) {
            card.classList.toggle('active', i === index);
        });

        testimonialDots.forEach(function (dot, i) {
            dot.classList.toggle('active', i === index);
        });
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(function () {
            showTestimonial(currentTestimonial + 1);
        }, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            showTestimonial(currentTestimonial + 1);
            resetAutoSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            showTestimonial(currentTestimonial - 1);
            resetAutoSlide();
        });
    }

    testimonialDots.forEach(function (dot, i) {
        dot.addEventListener('click', function () {
            showTestimonial(i);
            resetAutoSlide();
        });
    });

    if (testimonialCount > 1) {
        startAutoSlide();
    }

    // ---- Parallax Effect on Hero Orbs ----
    var heroOrbs = document.querySelectorAll('.hero-orb');

    if (heroOrbs.length > 0) {
        window.addEventListener('mousemove', function (e) {
            var centerX = window.innerWidth / 2;
            var centerY = window.innerHeight / 2;
            var moveX = (e.clientX - centerX) / centerX;
            var moveY = (e.clientY - centerY) / centerY;

            heroOrbs.forEach(function (orb, index) {
                var speed = (index + 1) * 15;
                orb.style.transform = 'translate(' + (moveX * speed) + 'px, ' + (moveY * speed) + 'px)';
            });
        }, { passive: true });
    }

    // ---- Contact Form ----
    var contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                var originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<span>Message Sent! ✓</span>';
                submitBtn.style.background = '#28c840';
                submitBtn.disabled = true;
                setTimeout(function () {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    contactForm.reset();
                }, 3000);
            }
        });
    }

    // ---- Smooth Scroll for Anchor Links ----
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                var navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 80;
                var targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ---- Active Nav Link on Scroll ----
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        var scrollPosition = window.pageYOffset + 200;
        sections.forEach(function (section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.offsetHeight;
            var sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });

})();
