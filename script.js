// Function to capture form data and send it via WhatsApp
function sendWhatsApp() {
    // Get values from the form
    const flavor = document.getElementById('flavor').value;
    const weight = document.querySelector('input[name="weight"]:checked').value;
    const msg = document.getElementById('cakeMessage').value;
    const date = document.getElementById('date').value;
    
    // Create the message text with line breaks (%0A)
    const text = `Hi! I want to order a cake.%0A*Flavor:* ${flavor}%0A*Weight:* ${weight}%0A*Message:* ${msg}%0A*Date:* ${date}`;
    
    // Redirect to WhatsApp URL (Change 1234567890 to your actual business number)
    window.open(`https://wa.me/917384899003?text=${text}`, '_blank');
}

// Function to trigger the live order popup animation after page load
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const popup = document.getElementById('livePopup');
        
        // Show the popup by removing translate and opacity classes
        popup.classList.remove('translate-y-20', 'opacity-0');
        
        // Hide the popup again after 5 seconds
        setTimeout(() => {
            popup.classList.add('translate-y-20', 'opacity-0');
        }, 5000); 
        
    }, 3000); // Wait 3 seconds before showing the popup initially
});

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. WhatsApp Logic
    const orderBtn = document.getElementById('whatsappOrderBtn');
    
    if (orderBtn) {
        orderBtn.addEventListener('click', () => {
            const flavor = document.getElementById('flavor').value;
            const weight = document.querySelector('input[name="weight"]:checked').value;
            const msg = document.getElementById('cakeMessage').value;
            const date = document.getElementById('date').value;
            
            const text = `Hi! I want to order a cake.%0A*Flavor:* ${flavor}%0A*Weight:* ${weight}%0A*Message:* ${msg}%0A*Date:* ${date}`;
            
            window.open(`https://wa.me/917384899003?text=${text}`, '_blank');
        });
    }

    // 2. Floating Popup Logic
    setTimeout(() => {
        const popup = document.getElementById('livePopup');
        if (popup) {
            popup.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
                popup.classList.add('translate-y-20', 'opacity-0');
            }, 5000); 
        }
    }, 3000); 
});98654
