document.addEventListener('DOMContentLoaded', () => {

    /* =========================
       JAAR AUTOMATISCH UPDATEN
    ========================= */
    const copyright = document.querySelector('.copyright');
    if (copyright) {
        const year = new Date().getFullYear();
        copyright.textContent = `© ${year} Lachgas Bezorgen Amsterdam. Alle rechten voorbehouden.`;
    }

    /* =========================
       VIDEO FALLBACK (MOBIEL / iOS)
    ========================= */
    const video = document.getElementById('bg-video');
    if (video) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => {
                document.body.style.backgroundColor = '#000';
                video.style.display = 'none';
            });
        }
    }

    /* =========================
       CLICK TRACKING (OPTIONEEL)
       Werkt alleen als GA4 aanwezig is
    ========================= */
    function trackClick(selector, label) {
        document.querySelectorAll(selector).forEach(el => {
            el.addEventListener('click', () => {
                if (typeof window.gtag === 'function') {
                    gtag('event', 'click', {
                        event_category: 'Contact',
                        event_label: label
                    });
                }
            });
        });
    }

    trackClick('a[href^="tel:"]', 'Telefoon');
    trackClick('a[href*="wa.me"]', 'WhatsApp');

});
