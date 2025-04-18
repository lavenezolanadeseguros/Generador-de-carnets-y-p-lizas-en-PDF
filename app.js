document.getElementById('carnet-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const cedula = document.getElementById('cedula').value;
    
    const carnetData = {
        nombre: nombre,
        cedula: cedula,
        carnetURL: 'carnet_' + cedula + '.html'
    };
    
    // Aquí se debería guardar el carnet en la base de datos y redirigir al usuario
    alert('Carnet generado para ' + nombre + ' con cédula ' + cedula);
});
