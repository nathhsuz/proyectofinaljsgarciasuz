Swal.fire({
    text: "Haz click en el boton ¿Que Ofrecemos? ¡Para que puedas ver nuestras propuestas y precios!",
    imageUrl: "https://seatmaps.com/assets/logo/logo-HH.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image"
});


document.getElementById("jSon").addEventListener('click', cargarJSON);



function cargarJSON() {
    fetch('http://127.0.0.1:5500/js/productos.json')
        .then(function (_res) {
            return _res.json();

        })
        .then(function (respuestas) {
            let html = '';
            respuestas.forEach(function (productos) {
                html += `
<li>${productos.tipo} ${productos.nombre} ${productos.Precio}</li>;
    `;
            })
            document.getElementById('resultados').innerHTML = html;
        })
}
