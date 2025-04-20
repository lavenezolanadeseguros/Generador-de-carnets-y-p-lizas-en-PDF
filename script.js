
document.getElementById("policy-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const numeroPoliza = document.getElementById("numeroPoliza").value;
  const nombre = document.getElementById("nombre").value;
  const cedula = document.getElementById("cedula").value;
  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const placa = document.getElementById("placa").value;

  const fechaEmision = new Date();
  const fechaVencimiento = new Date();
  fechaVencimiento.setFullYear(fechaEmision.getFullYear() + 1);

  const pdf = new jspdf.jsPDF();

  const urlDestino = `https://lavenezolanadeseguros.github.io/Poliza/${numeroPoliza}`;

  pdf.text("Póliza de Seguro", 20, 20);
  pdf.text("Número de Póliza: " + numeroPoliza, 20, 30);
  pdf.text("Nombre del Asegurado: " + nombre, 20, 40);
  pdf.text("Cédula/RIF: " + cedula, 20, 50);
  pdf.text("Marca: " + marca, 20, 60);
  pdf.text("Modelo: " + modelo, 20, 70);
  pdf.text("Placa: " + placa, 20, 80);
  pdf.text("Fecha de Emisión: " + fechaEmision.toLocaleDateString(), 20, 90);
  pdf.text("Fecha de Vencimiento: " + fechaVencimiento.toLocaleDateString(), 20, 100);

  const qrContainer = document.createElement("div");
  const qr = new QRCode(qrContainer, {
    text: urlDestino,
    width: 100,
    height: 100
  });

  await new Promise(resolve => setTimeout(resolve, 500));

  const img = qrContainer.querySelector("img");
  const qrImg = await html2canvas(img).then(canvas => canvas.toDataURL("image/png"));

  pdf.addImage(qrImg, "PNG", 20, 110, 50, 50);
  pdf.save(`${numeroPoliza}.pdf`);
});
