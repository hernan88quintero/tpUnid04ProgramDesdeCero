// TP N°4
// Ejercicio 1
var num1 = parseInt(prompt('ingrese un número A'));
var num2 = parseInt(prompt('ingrese un número B'));

if (num1 < num2) {
    alert('El menor de los dos números ingresados es ' + num1 + '.');
} else {
    alert('El menor de los dos números ingresados es ' + num2 + '.');
};

// Ejercicio 2
var numA = parseInt(prompt('ingrese un número'));
var parImpar = numA % 2;

if (parImpar == 0) {
    alert('El número ingresado es par.')
} else {
    alert('El número ingresado es impar.')
};

// Ejercicio 3
var ganeLaCarrera = false;

if (ganeLaCarrera = true) {
    console.log('Ganaste.')
} else {
    console.log('Perdiste.')
}

// Ejercicio 4
var posicionEnLaCarrera = 6;
if (posicionEnLaCarrera == 1) {
    alert('FELICITACIONES, SALISTE 1RO.')
} else if (posicionEnLaCarrera == 2) {
    alert('Te falto poquito para ganar.')
} else if (posicionEnLaCarrera == 3) {
    alert('Eres un orgullo para tu familia')
} else if (posicionEnLaCarrera > 3) {
    alert('Vuelve a tu casa.')
} else {
    alert('No tires fruta.')
};

// Ejercicio 5
var posicionEnLaCarrera = prompt('Ingrese la posición.');
var leyenda;
if (posicionEnLaCarrera == 1) {
    leyenda = 'FELICITACIONES, SALISTE 1RO.'
} else if (posicionEnLaCarrera == 2) {
    leyenda = 'Te faltó poquito para ganar.'
} else if (posicionEnLaCarrera == 3) {
    leyenda = 'Eres un orgullo para tu familia.'
} else if (posicionEnLaCarrera > 3) {
    leyenda = 'Vuelve a tu casa.'
} else {
    leyenda = 'No tires fruta.'
};

alert(leyenda);

// Ejercicio 6
var importeAPagar = parseInt(prompt('Ingrese el monto a abonar'));
var descuento = 0.8;
if (importeAPagar > 1000) {
    alert('El importe a abonar es de $ ' + (importeAPagar * descuento))
} else {
    alert('El importe a abonar es de $ ' + importeAPagar)
};

// Ejercicio 7
var montoVendido = parseInt(prompt('Ingrese el monto a vender.'));
var codigoVendedor = parseInt(prompt('Por favor ingrese el código de vendedor'));
var comision;

if (codigoVendedor < 100) {
    comision = 0.3;
    alert ('Importe de la venta: $' + montoVendido);
    alert ('Codigo ingresado: ' + codigoVendedor);
    alert ('Comisión: $ ' + (montoVendido * comision));
} else if (codigoVendedor >= 100 && codigoVendedor <= 200) {
    comision = 0.2;
    alert ('Importe de la venta: $' + montoVendido);
    alert ('Codigo ingresado: ' + codigoVendedor);
    alert ('Comisión: $ ' + (montoVendido * comision));
} else if (codigoVendedor > 200) {
    comision = 0.1;
    alert ('Importe de la venta: $' + montoVendido);
    alert ('Codigo ingresado: ' + codigoVendedor);
    alert ('Comisión: $ ' + (montoVendido * comision));
};

// Ejercicio 8
var d = prompt('Ingrese en nro el día de la semana del 1 (lunes) a 7 (domingo');

if (d == 1) {
    alert ('Lunes')
} else if (d == 2) {
    alert ('Martes')
} else if (d ==3) {
    alert ('Miércoles')
} else if (d == 4) {
    alert ('Jueves')
} else if (d == 5) {
    alert ('Viernes')
} else if (d == 6) {
    alert ('Sábado')
} else if (d == 7) {
    alert ('Domingo')
};

// Ejercicio 9
var grupoPersonas = prompt('ingrese el nro de integrantes del grupo');
var precioNormal = 1.5;
var precioReducido = 0.5;

if (grupoPersonas >= 8) {
    alert ('El grupo debe pagar $ ' + grupoPersonas * precioReducido)
} else {
    alert ('El grupo debe pagar $ ' + grupoPersonas * precioNormal)
};

// Ejercicio 10
var precio = parseInt(prompt('Valor a abonar'));
var descuentoFarmacia = 0.15;
var conDescuento = precio - (precio * descuentoFarmacia)

 if (precio > 100) {
    alert ('El valor de la compra es de $ ' + precio)
    alert ('El descuento es de $ ' + (precio * descuentoFarmacia))
    alert ('El precio final es de $ ' + conDescuento)
 } else {
    alert ('El precio a abonar es de $ ' + precio)
 };