const fs = require('fs');

// Fix CSS
let css = fs.readFileSync('css/main.css', 'utf8');
css = css.replace('.footer-social { justify-content: center;', '.footer-social { justify-content: flex-start;');
if (!css.includes('overflow-y: auto') && css.includes('.mobile-nav {')) {
    css = css.replace('.mobile-nav {    display: none;', '.mobile-nav {    display: none;    overflow-y: auto;    padding: 80px 0 40px;');
}
fs.writeFileSync('css/main.css', css);
console.log('CSS updated');

// Fix HTML
const files = ['index.html', 'about.html', 'catalog.html', 'contact.html', 'products.html', 'promotions.html', 'review.html'];
const contactHtml = `
        <div class="mobile-nav-contact">
            <a href="tel:0928528535"><i class="fas fa-phone-alt" style="margin-right:8px;color:#1e90ff;"></i>092-852-8535</a>
            <a href="https://line.me/R/ti/p/@999snkil" target="_blank" rel="noopener"><i class="fab fa-line" style="margin-right:8px;color:#00c300;"></i>LINE: @999snkil</a>
            <a href="https://www.facebook.com/pkpaint1996/" target="_blank" rel="noopener"><i class="fab fa-facebook-f" style="margin-right:8px;color:#1877f2;"></i>Facebook</a>
        </div>`;

for (const file of files) {
    let html = fs.readFileSync(file, 'utf8');
    if (!html.includes('mobile-nav-contact') && html.includes('id="mobileNav"')) {
        // Find the end of mobile-nav
        html = html.replace(/(<a href="contact.html".*?<\/a>\s*)(<\/div>)/, '$1' + contactHtml + '\n    $2');
        fs.writeFileSync(file, html);
        console.log('Updated ' + file);
    }
}
