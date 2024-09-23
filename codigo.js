function actualizarContador() {
    const inicio = new Date('2010-01-01').getTime();
    const hoy = new Date().getTime();
    const diferencia = hoy - inicio;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    document.getElementById('dias').textContent = dias;
}

document.addEventListener('DOMContentLoaded', function() {
    actualizarContador();
});