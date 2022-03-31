//console.log("Diego");

// TOLTIP BOTONES
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

$(document).ready(function () {
  // SCRIPT ENVIAR CORREO
  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
  });

  // CAMBIAR COLOR TITULOS RECETAS
  $("h3").on("dblclick", function () {
    $(this).css("color", "red");
  });

  // TOOGLE CARDS
  $(".tituloCard").click(function () {
    $(".card img").toggle();
    $(".card p").toggle();
  });
});
