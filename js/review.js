(function() {
    'use strict';

    // Filter gallery by category (photo grid only)
    window.filterGallery = function(btn, cat) {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('#galleryMasonry .gallery-item').forEach(item => {
            item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
        });
    };

    // Switch between "ภาพผลงาน" and "คลิปวิดีโอ"
    window.switchMediaTab = function(btn, type) {
        document.querySelectorAll('.media-tab').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        const photoSection = document.getElementById('photoSection');
        const videoSection = document.getElementById('videoSection');
        if (photoSection) photoSection.style.display = type === 'photos' ? '' : 'none';
        if (videoSection) videoSection.style.display = type === 'videos' ? '' : 'none';

        // Stop any playing clip when leaving the video tab
        if (type !== 'videos') {
            document.querySelectorAll('#videoGallery video.video-thumb').forEach(v => v.pause());
        }
    };

    // Lightbox
    let galleryItems = [];
    let currentLightboxIndex = -1;

    window.openGalleryLightbox = function(el) {
        const isVideo = el.classList.contains('video-item');
        galleryItems = isVideo
            ? Array.from(document.querySelectorAll('#videoGallery .gallery-item'))
            : Array.from(document.querySelectorAll('#galleryMasonry .gallery-item')).filter(i => i.style.display !== 'none');
        currentLightboxIndex = galleryItems.indexOf(el);
        showLightboxItem(currentLightboxIndex);
        document.getElementById('lightbox').classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    function showLightboxItem(idx) {
        if (idx < 0 || idx >= galleryItems.length) return;
        const el = galleryItems[idx];
        const imgEl = document.getElementById('lightboxImg');
        const videoEl = document.getElementById('lightboxVideo');
        const isVideo = el.classList.contains('video-item');

        if (isVideo) {
            const sourceEl = el.querySelector('video source');
            const videoSrc = sourceEl ? sourceEl.getAttribute('src') : '';
            imgEl.style.display = 'none';
            videoEl.style.display = 'block';
            if (videoEl.dataset.currentSrc !== videoSrc) {
                videoEl.querySelector('source').setAttribute('src', videoSrc);
                videoEl.load();
                videoEl.dataset.currentSrc = videoSrc;
            }
            videoEl.currentTime = 0;
            videoEl.play().catch(() => {});
        } else {
            videoEl.pause();
            videoEl.style.display = 'none';
            imgEl.style.display = 'block';
            const img = el.querySelector('img');
            const title = el.querySelector('.gallery-title')?.textContent || '';
            imgEl.src = img.src;
            imgEl.alt = img.alt || title;
        }
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
            const videoEl = document.getElementById('lightboxVideo');
            if (videoEl) videoEl.pause();
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

    // Video thumbnails logic
    document.querySelectorAll('.video-thumb').forEach(video => {
        const hasPoster = video.hasAttribute('poster') && video.getAttribute('poster').trim() !== '';

        if (hasPoster) {
            // Poster image paints on its own; just reveal once it's actually loaded.
            const posterImg = new Image();
            posterImg.onload = () => video.classList.add('is-ready');
            posterImg.onerror = () => {}; // poster missing/broken: leave gradient fallback showing
            posterImg.src = video.getAttribute('poster');
        }

        // ฟังก์ชันอัปเดตเวลาดึงออกมาเป็นตัวแปรเพื่อเรียกใช้งานได้ทั้ง 2 กรณี
        const handleMetadataLoaded = function() {
            if (!hasPoster) {
                const target = Math.min(1, (video.duration || 2) / 4);
                try { video.currentTime = target; } catch (e) {}
            }

            const durationEl = video.closest('.gallery-img-container')?.querySelector('.video-duration');
            if (durationEl && isFinite(video.duration) && video.duration > 0) {
                const totalSeconds = Math.round(video.duration);
                const minutes = Math.floor(totalSeconds / 60);
                const seconds = totalSeconds % 60;
                durationEl.textContent = minutes + ':' + String(seconds).padStart(2, '0');
            }
        };

        // ตรวจสอบว่าวิดีโอโหลด Metadata เสร็จไปแล้วหรือยัง (แก้ปัญหาโหลดจาก Cache)
        if (video.readyState >= 1) { // 1 = HAVE_METADATA
            handleMetadataLoaded();
        } else {
            video.addEventListener('loadedmetadata', handleMetadataLoaded, { once: true });
        }

        const handleDataLoaded = function() {
            if (!hasPoster) video.classList.add('is-ready');
        };

        if (video.readyState >= 2) { // 2 = HAVE_CURRENT_DATA
            handleDataLoaded();
        } else {
            video.addEventListener('loadeddata', handleDataLoaded, { once: true });
        }
    });

    // Scroll animation (simple fade-in)
    document.querySelectorAll('.gallery-item[onclick]').forEach(el => {
        el.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.click(); }
        });
    });

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