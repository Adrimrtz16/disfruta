document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nombre = document.getElementById('nombre').value;
    var mensaje = document.getElementById('mensaje').value;

    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    

    var mailtoLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=contacto@contacto.com&su=Pedido&body=' + encodeURIComponent('Nombre: ' + nombre + '\n\nPedido:\n' + mensaje);
    

    if (email || telefono) {
        if (email) {
            mailtoLink += '\nEmail: ' + email;
        }
        if (telefono) {
            mailtoLink += '\nTeléfono: ' + telefono;
        }
    }

    window.open(mailtoLink, '_blank');
});