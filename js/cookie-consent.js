document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');
    const settingsBtn = document.getElementById('cookie-settings');
    
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }
    
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`;
    }
    
    function hideBanner() {
        if (cookieBanner) {
            cookieBanner.classList.remove('show');
        }
    }
    
    function showBanner() {
        if (cookieBanner) {
            cookieBanner.classList.add('show');
        }
    }
    
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            setCookie('cookie_consent', 'all', 365);
            hideBanner();
        });
    }
    
    if (rejectBtn) {
        rejectBtn.addEventListener('click', function() {
            setCookie('cookie_consent', 'necessary', 365);
            hideBanner();
        });
    }
    
    if (settingsBtn) {
        settingsBtn.addEventListener('click', function() {
            window.location.href = 'privacy.html';
        });
    }
    
    if (!getCookie('cookie_consent')) {
        showBanner();
    }
});
