document.getElementById('formulario-carnet').addEventListener('submit', function(event) {
    event.preventDefault();

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const nombre = document.getElementById('nombre').value;
    const id = document.getElementById('id').value;
    const poliza = document.getElementById('poliza').value;
    const fechaEmision = document.getElementById('fecha-emision').value;
    const fechaVencimiento = document.getElementById('fecha-vencimiento').value;
    const cobertura = document.getElementById('cobertura').value;
    const aseguradora = document.getElementById('aseguradora').value;

    // Título del documento
    doc.setFontSize(16);
    doc.text("Carnet de Seguro", 20, 20);

    // Información del asegurado
    doc.setFontSize(12);
    doc.text(`Nombre del Asegurado: ${nombre}`, 20, 30);
    doc.text(`Número de Identificación: ${id}`, 20, 40);

    // Detalles de la póliza
    doc.text(`Número de Póliza: ${poliza}`, 20, 50);
    doc.text(`Fecha de Emisión: ${fechaEmision}`, 20, 60);
    doc.text(`Fecha de Vencimiento: ${fechaVencimiento}`, 20, 70);
    doc.text(`Cobertura: ${cobertura}`, 20, 80);
    doc.text(`Aseguradora: ${aseguradora}`, 20, 90);

    doc.text("Firma del Asegurado: ____________________________", 20, 110);
    doc.text("Firma de la Aseguradora: _________________________", 20, 120);

    doc.save(`${nombre}_carnet_poliza.pdf`);
    document.getElementById('descargar').style.display = 'block';
});
