(function() {
    'use strict';

    // Filter gallery by category
    window.filterGallery = function(btn, cat) {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('#galleryMasonry .gallery-item').forEach(item => {
            item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
        });
    };

    // Lightbox
    let galleryItems = [];
    let currentLightboxIndex = -1;

    window.openGalleryLightbox = function(el) {
        galleryItems = Array.from(document.querySelectorAll('#galleryMasonry .gallery-item')).filter(i => i.style.display !== 'none');
        currentLightboxIndex = galleryItems.indexOf(el);
        showLightboxItem(currentLightboxIndex);
        document.getElementById('lightbox').classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    function showLightboxItem(idx) {
        if (idx < 0 || idx >= galleryItems.length) return;
        const el = galleryItems[idx];
        const img = el.querySelector('img');
        const title = el.querySelector('.gallery-title')?.textContent || '';
        const tags = el.querySelector('.gallery-tags')?.textContent || '';
        document.getElementById('lightboxImg').src = img.src;
        document.getElementById('lightboxImg').alt = img.alt || title;
        const caption = document.getElementById('lightboxCaption');
        caption.querySelector('h3').textContent = title;
        caption.querySelector('p').textContent = tags;
        currentLightboxIndex = idx;
    }

    window.lightboxNav = function(dir, e) {
        e.stopPropagation();
        const next = currentLightboxIndex + dir;
        if (next >= 0 && next < galleryItems.length) showLightboxItem(next);
    };

    window.closeLightbox = function(e) {
        if (!e || e.target === document.getElementById('lightbox')) {
            document.getElementById('lightbox').classList.remove('open');
            document.body.style.overflow = '';
        }
    };

    window.closeLightboxBtn = function(e) {
        e.stopPropagation();
        window.closeLightbox();
    };

    // Keyboard navigation
    function handleGalleryKeydown(e) {
        const lb = document.getElementById('lightbox');
        if (lb && lb.classList.contains('open')) {
            if (e.key === 'ArrowLeft') showLightboxItem(currentLightboxIndex - 1);
            else if (e.key === 'ArrowRight') showLightboxItem(currentLightboxIndex + 1);
            else if (e.key === 'Escape') window.closeLightbox();
        }
    }
    document.addEventListener('keydown', handleGalleryKeydown);

    // Touch swipe support for mobile lightbox
    let touchStartX = 0;
    let touchEndX = 0;

    document.getElementById('lightbox')?.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.getElementById('lightbox')?.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // Swipe left = next
                const next = currentLightboxIndex + 1;
                if (next < galleryItems.length) showLightboxItem(next);
            } else {
                // Swipe right = prev
                const prev = currentLightboxIndex - 1;
                if (prev >= 0) showLightboxItem(prev);
            }
        }
    }, { passive: true });

    // Scroll animation (simple fade-in)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.gallery-item, .compare-card, .testi-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });
    }
})();
