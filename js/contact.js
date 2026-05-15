(function() {
    'use strict';
    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contactForm');
        const csrfToken = document.getElementById('csrfToken');
        let isSubmitting = false;

        function showFieldError(field, message) {
            clearFieldError(field);
            const errorEl = document.createElement('div');
            errorEl.className = 'field-error';
            errorEl.textContent = message;
            errorEl.setAttribute('role', 'alert');
            errorEl.style.cssText = 'color:#ef4444;font-size:13px;margin-top:4px;';
            field.parentNode.insertBefore(errorEl, field.nextSibling);
            field.style.borderColor = '#ef4444';
        }

        function clearFieldError(field) {
            const existing = field.parentNode.querySelector('.field-error');
            if (existing) existing.remove();
            field.style.borderColor = '';
        }

        function clearAllErrors() {
            contactForm.querySelectorAll('.field-error').forEach(el => el.remove());
            contactForm.querySelectorAll('[style*="border-color"]').forEach(el => el.style.borderColor = '');
        }

        if (contactForm && csrfToken) {
            contactForm.addEventListener('submit', function(e) {
                if (isSubmitting) {
                    e.preventDefault();
                    return false;
                }
                clearAllErrors();

                const honeypot = contactForm.querySelector('input[name="website"]');
                if (honeypot && honeypot.value !== '') {
                    e.preventDefault();
                    return false;
                }

                const name = contactForm.querySelector('input[name="name"]');
                if (name && !/^[\u0E00-\u0E7Fa-zA-Z\s]{2,50}$/.test(name.value)) {
                    e.preventDefault();
                    showFieldError(name, 'กรุณากรอกชื่อ-นามสกุลให้ถูกต้อง (2-50 ตัวอักษร)');
                    name.focus();
                    return false;
                }

                const phone = contactForm.querySelector('input[name="phone"]');
                if (phone && !/^0[0-9]{8,9}$/.test(phone.value)) {
                    e.preventDefault();
                    showFieldError(phone, 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก ขึ้นต้นด้วย 0)');
                    phone.focus();
                    return false;
                }

                const message = contactForm.querySelector('textarea[name="message"]');
                if (message) {
                    if (message.value.length < 10 || message.value.length > 1000) {
                        e.preventDefault();
                        showFieldError(message, 'กรุณากรอกข้อความ (10-1000 ตัวอักษร)');
                        message.focus();
                        return false;
                    }
                    if (/<\s*script\b|<[^>]+>/i.test(message.value)) {
                        e.preventDefault();
                        showFieldError(message, 'ขออภัย ข้อความของคุณมีตัวอักษรที่ไม่ได้รับอนุญาต');
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
    });
})();
