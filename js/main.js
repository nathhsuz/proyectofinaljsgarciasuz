const formulario=document.getElementById("formulario")
document.getElementById("vJson").addEventListener('click', cargarJSON);

formulario.addEventListener("submit" , function(event)
{


event.preventDefault();

});


let origen=document.getElementById("origen");
let destino=document.getElementById("destino");
let msjj=document.getElementById("msjj");
destino.addEventListener("change", function(){
   
    if (origen.value==destino.value){
        destino.value=null;
      msjj.innerHTML="<p>País origen no debe ser igual a país destino"
      

}
});



function cargarJSON() 
{
    fetch('http://127.0.0.1:5500/js/vuelos.json')
    .then(function(_res)
{
return _res.json();

})
.then(function(respuestas)
{
    let html = '';
respuestas.forEach(function(vuelos)  
{
    html += `
<li>${vuelos.origen} ${vuelos.destino} ${vuelos.precio}</li>;
    `;
})
document.getElementById('msjj').innerHTML = html;
}) 
}



 