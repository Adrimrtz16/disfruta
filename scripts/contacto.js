document.getElementById('contactoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nombre = document.getElementById('nombre').value;
    var mensaje = document.getElementById('mensaje').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;

    var mailtoLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=contacto@contacto.com&su=Contacto&body=' + encodeURIComponent('Nombre: ' + nombre + '\n\nMensaje:\n' + mensaje + '\n\n');
    
    if (email || telefono) {
        if (email) {
            mailtoLink += '\nEmail: \n' + email + '\n\n';
        }
        if (telefono) {
            mailtoLink += '\nTeléfono: \n' + telefono + '\n\n';
        }
    }

    window.open(mailtoLink, '_blank');
});