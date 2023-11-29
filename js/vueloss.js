const vuelos = [
    { origen: "Colombia", destino: "Argentina", precio: 480 },
    { origen: "Argentina", destino: "Colombia", precio: 450 },
    { origen: "Chile", destino: "Perú", precio: 540 },
    { origen: "Perú", destino: "Chile", precio: 520 },
    { origen: "Uruguay", destino: "Brasil", precio: 680 },
    { origen: "Brasil", destino: "Uruguay", precio: 640 },
    { origen: "Chile", destino: "Argentina", precio: 300 },
    { origen: "Argentina", destino: "Chile", precio: 280 },
    { origen: "Uruguay", destino: "Brasil", precio: 680 },
    { origen: "Colombia", destino: "Brasil", precio: 780 },
    { origen: "Colombia", destino: "Uruguay", precio: 680 },
    { origen: "Uruguay", destino: "Colombia", precio: 630 },
    { origen: "Argentina", destino: "Brasil", precio: 450 },
    { origen: "Brasil", destino: "Argentina", precio: 420 }
]

localStorage.setItem("vuelos", JSON.stringify(vuelos));
localStorage.getItem("vuelos");
console.log(vuelos)