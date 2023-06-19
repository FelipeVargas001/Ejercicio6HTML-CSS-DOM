const precios = {
    Aqua: 200,
    Emocion: 180,
    Alegria: 160,
    Frescura: 150,
}

let vendedores = {
    Juana: {
        Aqua: 0,
        Emocion: 0,
        Alegria: 0,
        Frescura: 0,
    },
    Pedro: {
        Aqua: 0,
        Emocion: 0,
        Alegria: 0,
        Frescura: 0,
    },
}

function empleadoDelMes() {
    vendedores.Juana.Aqua = parseInt(document.getElementById('JuanaAqua').value);
    vendedores.Juana.Emocion = parseInt(document.getElementById('JuanaEmocion').value);
    vendedores.Juana.Alegria = parseInt(document.getElementById('JuanaAlegria').value);
    vendedores.Juana.Frescura = parseInt(document.getElementById('JuanaFrescura').value);
    vendedores.Pedro.Aqua = parseInt(document.getElementById('PedroAqua').value);
    vendedores.Pedro.Emocion = parseInt(document.getElementById('PedroEmocion').value);
    vendedores.Pedro.Alegria = parseInt(document.getElementById('PedroAlegria').value);
    vendedores.Pedro.Frescura = parseInt(document.getElementById('PedroFrescura').value);
    let total1 = 0;
    let total2 = 0;
    let ventas1 = 0;
    let ventas2 = 0;
    for (let vendedor in vendedores) {
        for (let producto in vendedores[vendedor]) {
            if (isNaN(vendedores[vendedor][producto])) {
                vendedores[vendedor][producto] = 0;
            }
            if (vendedores[vendedor][producto] < 0) {
                return alert("Valor ingresado no valido, solo puede ingresar numeros enteros positivos");
            }
            console.log(vendedores[vendedor][producto])
            if (vendedor === "Juana") {
                total1 += vendedores[vendedor][producto];
                ventas1 += vendedores[vendedor][producto] * precios[producto];
            } else {
                total2 += vendedores[vendedor][producto];
                ventas2 += vendedores[vendedor][producto] * precios[producto];
            }
        }
    }
    document.getElementById('resultadoJuana').innerText = "Juana vendio " + total1 + " productos, sus ventas fueron de " + ventas1 + "USD";
    document.getElementById('resultadoPedro').innerText = "Pedro vendio " + total2 + " productos, sus ventas fueron de " + ventas2 + "USD";
    if (ventas1 > ventas2) {
        document.getElementById(`resultadoGanador`).innerText = "El vendedor del mes es Juana. ¡Felicitaciones!";
        console.log("El vendedor del mes es Juana. ¡Felicitaciones!");
    } else if (ventas2 > ventas1) {
        document.getElementById(`resultadoGanador`).innerText = "El vendedor del mes es Pedro. ¡Felicitaciones!";
        console.log("El vendedor del mes es Pedro. ¡Felicitaciones!");
    } else if (ventas1 === 0 && ventas2 === 0) {
        document.getElementById(`resultadoGanador`).innerText = "Ninguno vendio nada, !estan despedidos!";
        console.log("Ninguno vendio nada, !estan despedidos!");
    } else {
        document.getElementById(`resultadoGanador`).innerText = "Owwwo !Es un empate! premio para los dos. ¡Felicitaciones!";
        console.log("Owwwo !Es un empate! premio para los dos. ¡Felicitaciones!");
    }
    console.log("Total productos Juana " + total1);
    console.log("Total ventas Juana " + ventas1);
    console.log("Total productos Pedro " + total2);
    console.log("Total ventas Pedro " + ventas2);
}