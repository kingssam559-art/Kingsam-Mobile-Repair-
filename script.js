// KINGSAM MOBILE REPAIR - AUTOMATIC WHATSAPP ROUTING ENGINE
document.addEventListener("DOMContentLoaded", function() {
    
    var contactButton = document.getElementById("contactBtn");
    
    if (contactButton) {
        contactButton.addEventListener("click", function() {
            // Your exact Nigerian Business line
            var phoneNumber = "2348105904631"; 
            
            // Custom baseline customer message
            var message = "Hello Kingsam Mobile Repair, I am contacting you from your website catalog regarding a phone repair service or accessory purchase.";
            
            var encodedMessage = encodeURIComponent(message);
            var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
            
            // Launch chat window
            window.open(whatsappUrl, '_blank');
        });
    }
});
