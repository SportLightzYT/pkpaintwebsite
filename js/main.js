(function() {
    'use strict';
    const isCatalog = window.location.href.toLowerCase().includes('catalog');
    if (!isCatalog) {
        const preventAction = (e) => {
            const key = e.key ? e.key.toLowerCase() : '';
            const isCtrl = e.ctrlKey || e.metaKey;
            const isShift = e.shiftKey;
            if (e.keyCode === 123 || (isCtrl && isShift && (key === 'i' || key === 'j' || key === 'c')) || (isCtrl && (key === 'u' || key === 's'))) {
                e.preventDefault();
                return false;
            }
        };
        window.addEventListener('keydown', preventAction, true);
        window.addEventListener('contextmenu', e => e.preventDefault(), true);
        const style = document.createElement('style');
        style.innerHTML = 'body { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } input, textarea { -webkit-user-select: text; -moz-user-select: text; -ms-user-select: text; user-select: text; }';
        document.head.appendChild(style);
    }
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');
    const navbar = document.querySelector('.navbar');
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollTopBtn = document.querySelector('.scroll-top');
    function toggleMobileMenu() {
        if (!hamburger || !mobileNav) return;
        const isOpen = hamburger.classList.toggle('open');
        mobileNav.classList.toggle('open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    const mobileNavLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && hamburger.classList.contains('open')) {
                toggleMobileMenu();
            }
        });
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && hamburger && hamburger.classList.contains('open')) {
            toggleMobileMenu();
        }
    });
    function handleNavbarScroll() {
        if (!navbar) return;
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll();
    function updateScrollProgress() {
        if (!scrollProgress) return;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = progress + '%';
    }
    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();
    function handleScrollTopVisibility() {
        if (!scrollTopBtn) return;
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    window.addEventListener('scroll', handleScrollTopVisibility);
    handleScrollTopVisibility();
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-target]');
        if (counters.length === 0) return;
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseFloat(counter.getAttribute('data-target'));
                    const duration = 2000;
                    const startTime = performance.now();
                    function updateCounter(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 4);
                        const current = target * easeOut;
                        counter.textContent = Math.floor(current).toLocaleString('th-TH');
                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target.toLocaleString('th-TH');
                        }
                    }
                    requestAnimationFrame(updateCounter);
                    counterObserver.unobserve(counter);
                }
            });
        }, observerOptions);
        counters.forEach(counter => counterObserver.observe(counter));
    }
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        if (animatedElements.length === 0) return;
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        animatedElements.forEach(el => scrollObserver.observe(el));
    }
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '#!') return;
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    function updateCopyrightYear() {
        const copyrightYear = document.getElementById('copyright-year');
        if (copyrightYear) {
            copyrightYear.textContent = new Date().getFullYear();
        }
    }
    function init() {
        updateCopyrightYear();
        animateCounters();
        animateOnScroll();
        initSmoothScroll();
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
