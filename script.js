document.addEventListener("DOMContentLoaded", function() {
    var contactButton = document.getElementById("contactBtn");
    
    if (contactButton) {
        contactButton.addEventListener("click", function() {
            var phoneNumber = "2348105904631"; 
            // The message for the WhatsApp button
            var message = "Welcome to KINGSAM MOBILE REPAIR! Keeping your communication smooth is our top priority. Drop your phone model and the fault below, and we'll reply shortly.";
            
            var encodedMessage = encodeURIComponent(message);
            var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;
            window.open(whatsappUrl, '_blank');
        });
    }
});
