(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contactForm');
        const csrfToken = document.getElementById('csrfToken');
        let isSubmitting = false;
        if (contactForm && csrfToken) {
            // CSRF Token generation removed - should be handled by the server

            contactForm.addEventListener('submit', function(e) {
                if (isSubmitting) {
                    e.preventDefault();
                    return false;
                }
                const honeypot = contactForm.querySelector('input[name="website"]');
                if (honeypot && honeypot.value !== '') {
                    e.preventDefault();
                    return false;
                }
                const phone = contactForm.querySelector('input[name="phone"]');
                if (phone && !/^0[0-9]{8,9}$/.test(phone.value)) {
                    e.preventDefault();
                    alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก ขึ้นต้นด้วย 0)');
                    phone.focus();
                    return false;
                }
                const name = contactForm.querySelector('input[name="name"]');
                if (name && !/^[\u0E00-\u0E7Fa-zA-Z\s]{2,50}$/.test(name.value)) {
                    e.preventDefault();
                    alert('กรุณากรอกชื่อ-นามสกุลให้ถูกต้อง (2-50 ตัวอักษร)');
                    name.focus();
                    return false;
                }
                const message = contactForm.querySelector('textarea[name="message"]');
                if (message) {
                    if (message.value.length < 10 || message.value.length > 1000) {
                        e.preventDefault();
                        alert('กรุณากรอกข้อความ (10-1000 ตัวอักษร)');
                        message.focus();
                        return false;
                    }
                    if (/<\s*script\b|<[^>]+>/i.test(message.value)) {
                        e.preventDefault();
                        alert('ขออภัย ข้อความของคุณมีตัวอักษรที่ไม่ได้รับอนุญาต');
                        message.focus();
                        return false;
                    }
                }
                isSubmitting = true;
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                if (submitBtn) submitBtn.disabled = true;
                setTimeout(() => {
                    isSubmitting = false;
                    if (submitBtn) submitBtn.disabled = false;
                }, 30000);
            });
        }
        // generateCSRFToken() removed
    });
})();
