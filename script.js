document.addEventListener('DOMContentLoaded', function() {
    
    const toggle = document.getElementById('billing-toggle');
    const prices = document.querySelectorAll('.plan-price');
    const billingInfos = document.querySelectorAll('.billing-info');

    toggle.addEventListener('change', function() {
        const isYearly = this.checked;

        // Zmiana cen
        prices.forEach(price => {
            const monthlyPrice = price.getAttribute('data-monthly');
            const yearlyPrice = price.getAttribute('data-yearly');

            // Animacja zanikania
            price.style.opacity = '0';
            
            setTimeout(() => {
                price.innerText = (isYearly ? yearlyPrice : monthlyPrice) + " zł";
                price.style.opacity = '1';
            }, 200);
        });

        // Pokazywanie/ukrywanie informacji "Rozliczane rocznie"
        billingInfos.forEach(info => {
            if (isYearly) {
                info.classList.add('visible');
            } else {
                info.classList.remove('visible');
            }
        });
    });

});