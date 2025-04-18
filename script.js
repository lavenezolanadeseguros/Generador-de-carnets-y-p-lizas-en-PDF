document.getElementById('formulario').addEventListener('submit', async function (e) {
  e.preventDefault();
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const form = new FormData(e.target);
  const data = Object.fromEntries(form.entries());

  const img = new Image();
  img.src = 'assets/logo.jpg';
  img.onload = function () {
    doc.addImage(img, 'JPEG', 80, 10, 50, 30);
    doc.setFontSize(14);
    doc.setTextColor(0, 63, 80);
    doc.text("La Venezolana de Seguros y Vida C.A.", 105, 45, null, null, 'center');
    doc.setFontSize(10);
    doc.text("RIF: J-000214476", 105, 51, null, null, 'center');

    const hoy = new Date();
    const vencimiento = new Date();
    vencimiento.setFullYear(hoy.getFullYear() + 1);
    const format = (fecha) => fecha.toLocaleDateString('es-VE');
    doc.setFontSize(11);
    doc.text(`Fecha de Emisión: ${format(hoy)}`, 15, 65);
    doc.text(`Fecha de Vencimiento: ${format(vencimiento)}`, 120, 65);

    let y = 75;
    const salto = 7;
    const campos = [
      ["Nombre completo", data.nombre],
      ["Cédula/RIF", data.cedula],
      ["Teléfono", data.telefono],
      ["N° de Póliza", data.poliza],
      ["Producto/Plan", data.producto],
      ["Canal de Venta", data.canal],
      ["Total a Cobrar (USD)", data.total],
      ["Placa", data.placa],
      ["Marca", data.marca],
      ["Modelo", data.modelo],
      ["Año", data.anio],
      ["Color", data.color],
      ["Serial Motor", data.motor],
      ["Serial Carrocería", data.carroceria],
      ["Versión", data.version],
      ["Tipo de Vehículo", data.tipo],
      ["Uso", data.uso],
      ["N° de Pasajeros", data.pasajeros]
    ];
    campos.forEach(([label, valor]) => {
      doc.text(`${label}: ${valor}`, 15, y);
      y += salto;
    });

    doc.setFontSize(10);
    doc.text("_________________________", 15, y + 15);
    doc.text("Firma del Asegurado", 15, y + 20);
    doc.save(`Poliza_${data.nombre}.pdf`);
  };
});
