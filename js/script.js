window.addEventListener('DOMContentLoaded', () => {
  const fechaHoy = new Date();
  const fechaEmision = fechaHoy.toISOString().split('T')[0];

  const fechaVencimiento = new Date(fechaHoy);
  fechaVencimiento.setFullYear(fechaVencimiento.getFullYear() + 1);
  const fechaVence = fechaVencimiento.toISOString().split('T')[0];

  document.getElementById('fecha_emision').value = fechaEmision;
  document.getElementById('fecha_vencimiento').value = fechaVence;
});

document.getElementById('carnetForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const cedula = document.getElementById('cedula').value;
  const emision = document.getElementById('fecha_emision').value;
  const vencimiento = document.getElementById('fecha_vencimiento').value;

  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("Carnet de Seguro", 20, 20);
  doc.setFontSize(12);
  doc.text(`Nombre: ${nombre}`, 20, 40);
  doc.text(`Cédula: ${cedula}`, 20, 50);
  doc.text(`Fecha de Emisión: ${emision}`, 20, 60);
  doc.text(`Fecha de Vencimiento: ${vencimiento}`, 20, 70);

  doc.save(`Carnet_${cedula}.pdf`);
});
