// Alert explicando qué es lo que va a realizar la operación
alert('Vamos a multiplicar')

const ENTRADA = Number(prompt('Ingrese un numero para multiplicar')) // Pedir un numero para realizar una operación
const ENTRADA2 = parseFloat(prompt('Tabla de multiplicar del 1 al:')) // Pedir cantidad de veces que se vaya a repetir la operación

const multiplicar = (a, b) => a * b //n

for (let i = 0; i < ENTRADA2; i++) {
  // Tabla de multiplicar

  let multiplicador = i + 1

  let resultado = multiplicar(ENTRADA, multiplicador)

  console.log(ENTRADA + ' X ' + multiplicador + ' = ' + resultado)
}
