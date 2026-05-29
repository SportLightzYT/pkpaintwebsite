
// Phase 8: XSS Protection Helper
function escapeHTML(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

(function() {
    'use strict';

    // Track page visit (once per session per page)
    (function trackPageVisit() {
        const pageKey = 'pk_visited_' + window.location.pathname;
        if (!sessionStorage.getItem(pageKey)) {
            sessionStorage.setItem(pageKey, '1');
            
            // Get friendly Thai page title based on path
            let pageTitle = 'เข้าชมเว็บไซต์';
            const path = window.location.pathname;
            if (path.includes('products.html')) {
                pageTitle = 'เข้าชมหน้าสินค้า';
            } else if (path.includes('catalog.html')) {
                pageTitle = 'เข้าชมหน้าแคตตาล็อค';
            } else if (path.includes('promotions.html')) {
                pageTitle = 'เข้าชมหน้าโปรโมชั่น';
            } else if (path.includes('review.html')) {
                pageTitle = 'เข้าชมหน้าดูรีวิว';
            } else if (path.includes('about.html')) {
                pageTitle = 'เข้าชมหน้าเกี่ยวกับเรา';
            } else if (path.includes('contact.html')) {
                pageTitle = 'เข้าชมหน้าติดต่อเรา';
            } else if (path === '/' || path.endsWith('index.html') || path.endsWith('pkpaint/') || path.endsWith('pkpaint')) {
                pageTitle = 'เข้าชมหน้าหลัก';
            }
            
            fetch('data/stats.json', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'visit', page: pageTitle })
            }).catch(() => {});
        }
    })();

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
    window.addEventListener('popstate', () => { document.body.style.overflow = ''; });
    const mobileNavLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') === 'index.html' && (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('pkpaint/'))) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
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
    
    let cachedScrollHeight = 0;
    let cachedClientHeight = 0;

    function updateCachedDimensions() {
        cachedScrollHeight = document.documentElement.scrollHeight;
        cachedClientHeight = document.documentElement.clientHeight;
    }

    window.addEventListener('load', updateCachedDimensions);
    window.addEventListener('resize', updateCachedDimensions);

    function updateScrollProgress() {
        if (!scrollProgress) return;
        if (!cachedScrollHeight) updateCachedDimensions();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = cachedScrollHeight - cachedClientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        scrollProgress.style.width = progress + '%';
    }
    
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

    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                handleNavbarScroll();
                updateScrollProgress();
                handleScrollTopVisibility();
                isScrolling = false;
            });
            isScrolling = true;
        }
    }, { passive: true });

    handleNavbarScroll();
    updateScrollProgress();
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
                    const targetStr = counter.getAttribute('data-target');
                    const target = parseFloat(targetStr);
                    const decimals = targetStr.includes('.') ? targetStr.split('.')[1].length : 0;
                    const duration = 2000;
                    const startTime = performance.now();
                    function updateCounter(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const easeOut = 1 - Math.pow(1 - progress, 4);
                        const current = target * easeOut;
                        counter.textContent = Number(current.toFixed(decimals)).toLocaleString('th-TH', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = Number(target.toFixed(decimals)).toLocaleString('th-TH', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
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
                try {
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
                } catch (err) {
                    console.warn(`Invalid CSS selector for smooth scroll: ${href}`);
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
