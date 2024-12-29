
// // Formulário de contato
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulário enviado! Entraremos em contato em breve.');
    form.reset();
});
