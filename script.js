document.querySelector('button').addEventListener('click', () => {
  const phoneNumber = "2348105904631"; 
  const message = "Hello Kingsam, I want to inquire about a mobile repair!";

  window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
});
