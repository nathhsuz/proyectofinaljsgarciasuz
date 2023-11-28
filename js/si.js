document.getElementById("jSon").addEventListener('click', cargarJSON);


    
function cargarJSON() 
{
    fetch('http://127.0.0.1:5500/js/productos.json')
    .then(function(_res)
{
return _res.json();

})
.then(function(respuestas)
{
    let html = '';
respuestas.forEach(function(productos)  
{
    html += `
<li>${productos.tipo} ${productos.nombre} ${productos.Precio}</li>;
    `;
})
document.getElementById('resultados').innerHTML = html;
}) 
}