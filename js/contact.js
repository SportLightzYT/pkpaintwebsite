(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contactForm');
        const csrfToken = document.getElementById('csrfToken');

        if (contactForm && csrfToken) {
            // Generate CSRF token
            csrfToken.value = generateCSRFToken();

            contactForm.addEventListener('submit', function(e) {
                // Check honeypot field (spam protection)
                const honeypot = contactForm.querySelector('input[name="website"]');
                if (honeypot && honeypot.value !== '') {
                    e.preventDefault();
                    return false;
                }

                // Validate phone number format
                const phone = contactForm.querySelector('input[name="phone"]');
                if (phone && !/^0[0-9]{8,9}$/.test(phone.value)) {
                    e.preventDefault();
                    alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก ขึ้นต้นด้วย 0)');
                    phone.focus();
                    return false;
                }

                // Validate name format
                const name = contactForm.querySelector('input[name="name"]');
                if (name && !/^[\u0E01-\u0E5B\u0E30-\u0E4E\u0E50-\u0E59a-zA-Z\s]{2,50}$/.test(name.value)) {
                    e.preventDefault();
                    alert('กรุณากรอกชื่อ-นามสกุลให้ถูกต้อง (2-50 ตัวอักษร)');
                    name.focus();
                    return false;
                }

                // Validate message length
                const message = contactForm.querySelector('textarea[name="message"]');
                if (message && (message.value.length < 10 || message.value.length > 1000)) {
                    e.preventDefault();
                    alert('กรุณากรอกข้อความ (10-1000 ตัวอักษร)');
                    message.focus();
                    return false;
                }
            });
        }

        function generateCSRFToken() {
            const timestamp = Date.now().toString(36);
            const randomStr = Math.random().toString(36).substring(2, 15);
            return btoa(timestamp + randomStr);
        }
    });

    // All core functionality (Navbar, Mobile Nav, Scroll effects) 
    // is handled globally in js/main.js
})();
