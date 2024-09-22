// ----------- Ejercicio 1 -----------

function ejercicio1(form) {
    let tasaDecimal = 2 / 100;
    let capitalInicial = form.capital.value.trim();
    let capitalFinal =  capitalInicial * Math.pow(1 + tasaDecimal,1);

    if (isNaN(capitalInicial) || capitalInicial < 0 || isLetter(capitalInicial) || capitalInicial === "" || !validarsignos(capitalInicial)) {
        alert("Por favor, ingresa un valor numérico valido para el capital inicial.");
        return false; 
    } else{
        alert("Despues de un mes su capital sera de: " + capitalFinal + "$")
        
        var labelResultado = document.getElementById('resultado');
        labelResultado.textContent = capitalFinal;
    
    }
    return true;   
}

// ----------- Ejercicio 2 -----------

function ejercicio2(form) {
    let sueldobase = form.sueldo.value.trim();
    let venta1 = form.venta1.value.trim();
    let venta2 = form.venta2.value.trim();
    let venta3 = form.venta3.value.trim();

    if (isNaN(sueldobase) || sueldobase < 0 || isLetter(sueldobase) || sueldobase === "" || !validarsignos(sueldobase)) {
        alert("Por favor, ingresa un valor numérico válido para el sueldo base.");
        return false;
    }

    if (isNaN(venta1) || venta1 < 0 || isLetter(venta1) || venta1 === "" || !validarsignos(venta1) ||
        isNaN(venta2) || venta2 < 0 || isLetter(venta2) || venta2 === "" || !validarsignos(venta2) ||
        isNaN(venta3) || venta3 < 0 || isLetter(venta3) || venta3 === "" || !validarsignos(venta3)) {
        alert("Por favor, ingresa valores numéricos válidos para las ventas.");
        return false;
    }

    venta1 = parseFloat(venta1) * 0.1;
    venta2 = parseFloat(venta2) * 0.1;
    venta3 = parseFloat(venta3) * 0.1;

    let comisiones = venta1 + venta2 + venta3;
    let Total = parseFloat(sueldobase) + comisiones;

    alert("El total de comisiones por las ventas es: $" + comisiones.toFixed(2));
    alert("El total a recibir en el mes es: $" + Total.toFixed(2));

    return true;
}

// ----------- Ejercicio 3 -----------

function ejercicio3(form) {

    let TotalCompra = form.compra.value.trim();

    if (isNaN(TotalCompra) || TotalCompra < 0 || isLetter(TotalCompra) || TotalCompra === "" || !validarsignos(TotalCompra)) {
        alert("Por favor, ingresa un valor numérico valido para la Compra Total.");
        return false; 
    } else{
        
        TotalPagar =  parseFloat(TotalCompra) * 15/100;

        alert("El total a pagar con el descuento sera de: " + TotalPagar + "$")      
    }

    return true;

}

// ----------- Ejercicio 4 -----------

function ejercicio4(form) {
    let parcialuno = parseFloat(form.parcial1.value.trim());
    let parcialdos = parseFloat(form.parcial2.value.trim());
    let parcialtres = parseFloat(form.parcial3.value.trim());
    let examenFinal = parseFloat(form.examen.value.trim());
    let trabajoFinal = parseFloat(form.trabajo.value.trim());

    if (parcialuno < 0 || parcialuno > 10 || isNaN(parcialuno) || isLetter(parcialuno) || parcialuno === "" || !validarsignos(parcialuno) ||
    parcialdos < 0 || parcialdos > 10 || isNaN(parcialdos) || isLetter(parcialdos) || parcialdos === "" || !validarsignos(parcialdos) ||
    parcialtres < 0 || parcialtres > 10 || isNaN(parcialtres) || isLetter(parcialtres) || parcialtres === "" || !validarsignos(parcialtres)) {
        alert("Por favor, ingresa valores numéricos válidos para las calificaciones de parciales (entre 0 y 10).");
        return false;
    }

    if (examenFinal < 0 || examenFinal > 10 || isNaN(examenFinal) || isLetter(examenFinal) || examenFinal === "" || !validarsignos(examenFinal)) {
        alert("Por favor, ingresa un valor numérico válido para la calificación del examen final (entre 0 y 10).");
        return false;
    }

    if (trabajoFinal < 0 || trabajoFinal > 10 || isNaN(trabajoFinal) || isLetter(trabajoFinal) || trabajoFinal === "" || !validarsignos(trabajoFinal)) {
        alert("Por favor, ingresa un valor numérico válido para la calificación del trabajo final (entre 0 y 10).");
        return false;
    }

    let promedio = (parcialuno + parcialdos + parcialtres) / 3;
    let calificacionA = promedio * 55 / 100;
    let calificacionB = examenFinal * 30 / 100;
    let calificacionC = trabajoFinal * 15 / 100;

    let calificacionFinal = calificacionA + calificacionB + calificacionC;
    alert("La calificación Final es: " + calificacionFinal.toFixed(2));

    return true;
}

// ----------- Ejercicio 5 -----------

function ejercicio5(form){
    let anioNacimiento = parseFloat(form.anio_nacido.value.trim());
    let mesNacimiento = parseFloat(form.mes_nacido.value.trim());
    let diaNacimiento = parseFloat(form.dia_nacido.value.trim());

    let anioHoy = parseFloat(form.anio_actual.value.trim());
    let mesHoy = parseFloat(form.mes_actual.value.trim());
    let diaHoy = parseFloat(form.dia_actual.value.trim());

    if (!esFechaValida(anioNacimiento, mesNacimiento, diaNacimiento) || !validarsignos(anioNacimiento) || !validarsignos(mesNacimiento) || !validarsignos(diaNacimiento)) {
        alert("La fecha de nacimiento ingresada no es válida.");
        return false;
    }

    if (!esFechaValida(anioHoy, mesHoy, diaHoy) || !validarsignos(anioHoy) || !validarsignos(mesHoy) || !validarsignos(diaHoy)) {
        alert("La fecha actual ingresada no es válida.");
        return false;
    }

    let edad = calcularEdad(anioNacimiento, mesNacimiento, diaNacimiento, anioHoy, mesHoy, diaHoy);
    alert("La edad calculada es: " + edad);

    return true;

}

// ----------- Ejercicio 6   -----------

function ejercicio6(form){
    let frase = form.texto.value.trim();

    let validarfrase = /^[a-zA-ZñÑ\s]*$/;

    // Comprobamos si la frase cumple con la expresión regular
    if (!(validarfrase.test(frase)) || frase == "") {
        alert("Ingrese solo Caracteres Alfabeticos y Texto")
        return false;
    } 
    let resultado = palabrasANumeros(frase);
    alert("Tu nueva frase es: " + resultado);
    return true;
}

// ----------- Ejercicio 7   -----------

function ejercicio7(form) {
    let HorasExtras = form.horaextra.value.trim();
    let pagoHoraNormal = form.pagohora.value.trim();
    let pagoHoraExtra;
    let totalpagoHoras;
    let horasExtrasDobles = 8; 


    if (isNaN(HorasExtras) || HorasExtras < 0 || isLetter(HorasExtras) || HorasExtras === "" || !validarsignos(HorasExtras) ||
        isNaN(pagoHoraNormal) || pagoHoraNormal < 0 || isLetter(pagoHoraNormal) || pagoHoraNormal === "" || !validarsignos(pagoHoraNormal)) {
        alert("Por favor, ingresa un valor numérico valido para el Pago y las Horas.");
        return false; 
    } else {
        if (HorasExtras <= horasExtrasDobles) { 
            pagoHoraExtra = pagoHoraNormal * 2;
            totalpagoHoras = HorasExtras * pagoHoraExtra;
        } else {
            let horasExtrasTriples = HorasExtras - horasExtrasDobles;
            pagoHoraExtra = pagoHoraNormal * 2;
            let pagoHoraExtraTriple = pagoHoraNormal * 3; 
            totalpagoHoras = (horasExtrasDobles * pagoHoraExtra) + (horasExtrasTriples * pagoHoraExtraTriple);
        }
    
        alert("El pago por las Horas Extras Trabajadas es de: $" + totalpagoHoras.toFixed(2));

        return true;   
    }
}

// ----------- Ejercicio 8   -----------

function ejercicio8(form){
    let salarioMensual = parseFloat(form.salario.value.trim());
    let anioantiguo = parseFloat(form.anio.value.trim());
    let mesantiguo = parseFloat(form.mes.value.trim());
    let antiguedad = parseFloat(anioantiguo) + parseFloat(mesantiguo) / 12;
    let utilidad;

    if (isNaN(salarioMensual) || salarioMensual < 0 || isLetter(salarioMensual) || salarioMensual === "" || !validarsignos(salarioMensual)) {
        alert("Por favor, ingresa un salario mensual válido.");
        return false; 
    }

    if (isNaN(anioantiguo) || anioantiguo < 0 || isLetter(anioantiguo) || anioantiguo === "" || !validarsignos(anioantiguo)) {
        alert("Por favor, ingresa un año de antigüedad válido.");
        return false; 
    }

    if (isNaN(mesantiguo) || mesantiguo < 1 || isLetter(mesantiguo) || mesantiguo === "" || !validarsignos(mesantiguo) || mesantiguo > 12) {
        alert("Por favor, ingresa un mes de antigüedad válido (entre 1 y 12).");
        return false;
    }

    if (antiguedad < 1) {
        utilidad = salarioMensual * 0.05; // Menos de 1 año
    } else if (antiguedad >= 1 && antiguedad < 2) {
        utilidad = salarioMensual * 0.07; // 1 año o más y menos de 2 años
    } else if (antiguedad >= 2 && antiguedad < 5) {
        utilidad = salarioMensual * 0.10; // 2 años o más y menos de 5 años
    } else if (antiguedad >= 5 && antiguedad < 10) {
        utilidad = salarioMensual * 0.15; // 5 años o más y menos de 10 años
    } else if (antiguedad >= 10) {
        utilidad = salarioMensual * 0.20; // 10 años o más
    }
    
    alert("Su utilidad es de: $" + utilidad.toFixed(2));

    return true;

}

// ----------- Ejercicio 9   -----------

function ejercicio9(form){
    let nombre = form.nombre.value.trim();
    let email = form.email.value.trim();
    let contraseña = form.password.value.trim();
    let comentarios = form.comentarios.value.trim();
    let condiciones = form.condiciones.checked;

    if (!nombre || nombre == "") {
        alert("El nombre es obligatorio.");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email == "") {
        alert("El email es obligatorio y debe ser una dirección válida.");
        return false;
    }

    if (contraseña.length < 6 || 
        !/[a-z]/.test(contraseña) || 
        !/[A-Z]/.test(contraseña) || 
        !/\d/.test(contraseña) || contraseña == "") {
        alert("La contraseña debe tener al menos 6 caracteres, incluyendo una letra minúscula, una letra mayúscula y un dígito.");
        return false;
    }

    if (comentarios.length > 50) {
        alert("Los comentarios no deben exceder los 50 caracteres.");
        return false;
    }

    if (!condiciones) {
        alert("Debe aceptar las condiciones del servicio.");
        return false;
    }

    alert("Datos enviados con Exito");

    return true;
}

// ----------- Ejercicio 10   -----------

function removeretiquetasHTML(form) {
    let texto = form.cadena.value.trim();

    if (typeof texto !== 'string') {
        throw TypeError('El argumento debe ser una cadena de caracteres.');
    }

    let patron = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    return texto.replace(patron, '');
}

function ejercicio10(form) {
    try {
        const nuevoTexto = removeretiquetasHTML(form);
        alert("Su nuevo texto es: " + nuevoTexto);
    } catch (e) {
        console.log(`Error: ${e.message}`);
        return false; // Evita el envío del formulario en caso de error
    }

    return false; // Evita el envío del formulario
}

// Funcion palabrasANumeros
function palabrasANumeros(frase) {
    let numeros = {
        "cero": 0,
        "uno": 1,
        "dos": 2,
        "tres": 3,
        "cuatro": 4,
        "cinco": 5,
        "seis": 6,
        "siete": 7,
        "ocho": 8,
        "nueve": 9
    };
    frase = frase.trim();

    // Dividir la frase en palabras eliminando espacios en blanco adicionales
    let palabras = frase.split(" ").filter(palabra => palabra !== '');

    let resultado = palabras.map(palabra => {
        let palabraMinuscula = palabra.toLowerCase();
        if (palabraMinuscula in numeros) {
            return numeros[palabraMinuscula];
        } else {
            return -1;
        }
    });

    // Reconstruir la frase traducida
    let fraseanumero = resultado.join(" ");

    return fraseanumero;
}

// Funcion para calcular la Edad
function calcularEdad(anioNacimiento, mesNacimiento, diaNacimiento, anioActual, mesActual, diaActual) {
    let edad = anioActual - anioNacimiento;
    // Ajustar la edad si no se ha cumplido el mes de nacimiento o día de nacimiento este año
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        edad--;
    }
    return edad;
}

// Funcion para calcular si es una Fecha Valida
function esFechaValida(anio, mes, dia) {
    if (isNaN(anio) || isNaN(mes) || isNaN(dia) || anio == ""|| mes == "" || dia == "" || anio < 0) {
        alert("Por favor, ingresa valores numéricos válidos para la Fecha.");
        return false;
    }

    if (mes < 1 || mes > 12) {
        alert("Por favor, ingresa valores numéricos válidos para los Meses (entre 1 y 12).");
        return false;
    }

    if (dia < 1 || dia > diasEnMes(anio, mes)) {
        alert("Por favor, ingresa valores numéricos válidos para el Dia del Mes.");
        return false;
    }

    return true;
}

// Función para calcular la cantidad de días en un mes, considerando año bisiesto
function diasEnMes(anio, mes) {
    switch (mes) {
        case 1: // Enero
        case 3: // Marzo
        case 5: // Mayo
        case 7: // Julio
        case 8: // Agosto
        case 10: // Octubre
        case 12: // Diciembre
            return 31;
        case 4: // Abril
        case 6: // Junio
        case 9: // Septiembre
        case 11: // Noviembre
            return 30;
        case 2: // Febrero
            if (esAnioBisiesto(anio)) {
                return 29;
            } else {
                return 28;
            }
        default:
            return 0; // Mes inválido
    }
}

// Función para determinar si un año es bisiesto
function esAnioBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

// Funcion para validar si hay letras
function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
}

function validarsignos(char) {
    return /^[^+\-*\/]*$/.test(char);

}