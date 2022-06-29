class Gato {
  constructor(nombre, tipo, edad, peso, actividad) {
    this.nombre = nombre
    this.tipo = tipo
    this.edad = edad
    this.peso = peso
    this.actividad = actividad
  }
}
const gato1 = new Gato('Homero', 'gato', 18, 2500, 'casero')
const gato2 = new Gato('Cuca', 'gato', 5, 1500, 'casero')
const gato3 = new Gato('Luna', 'gato', 24, 4300, 'explorador')

const gatos = [gato1, gato2, gato3]

class Perro {
  constructor(nombre, tipo, edad, peso) {
    this.nombre = nombre
    this.tipo = tipo
    this.edad = edad
    this.peso = peso
  }
}
const perro1 = new Perro('Lula', 'perro', 20, 10000)
const perro2 = new Perro('Boby', 'perro', 12, 7000)
const perro3 = new Perro('Loki', 'perro', 15, 5000)

const perros = [perro1, perro2, perro3]

const mascotas = perros.concat(gatos)

//Pedir informacion al usuario
alert(
  'Bienvenido al simulador de raciones, ingresa los datos de tu mascota a continuacion, recuerda que esto no reemplaza la observacion de un veterinario',
)

const calculoPerro = (perro) => {
  if (perro.peso <= 1200) {
    if (perro.edad <= 3) {
      alert(
        'Necesita una racion de entre 25 a 240 gr de racion de cachorro por dia',
      )
    } else if (perro.edad <= 5) {
      alert(
        'Necesita una racion de entre 40 a 280 gr de racion de cachorro por dia',
      )
    } else if (perro.edad <= 8) {
      alert(
        'Necesita una racion de entre 45 a 290 gr de racion de cachorro por dia',
      )
    } else if (perro.edad <= 12) {
      alert(
        'Necesita una racion de entre 40 a 130 gr de racion de adulto por dia',
      )
    } else {
      alert(
        'Necesita una racion de entre 100 a 180 gr de racion de adulto por dia',
      )
    }
  } else if (perro.peso <= 4500) {
    if (perro.edad <= 3) {
      alert(
        'Necesita una racion de entre 130 a 590 gr de racion de cachorro por dia',
      )
    } else if (perro.edad <= 5) {
      alert(
        'Necesita una racion de entre 240 a 760 gr de racion de cachorro por dia',
      )
    } else if (perro.edad <= 8) {
      alert(
        'Necesita una racion de entre 280 a 840 gr de racion de cachorro por dia',
      )
    } else if (perro.edad <= 12) {
      alert(
        'Necesita una racion de entre 290 a 700 gr de racion de cachorro por dia',
      )
    } else {
      alert(
        'Necesita una racion de entre 320 a 500 gr de racion de adulto por dia',
      )
    }
  } else {
    if (perro.edad <= 3) {
      alert(
        'Necesita una racion de entre 280 a 700 gr de racion de cachorro por dia',
      )
    } else if (perro.edad <= 5) {
      alert(
        'Necesita una racion de entre 590 a 1020 gr de racion de cachorro por dia',
      )
    } else if (perro.edad <= 8) {
      alert(
        'Necesita una racion de entre 760 a 1100 gr de racion de cachorro por dia',
      )
    } else if (perro.edad <= 12) {
      alert(
        'Necesita una racion de entre 840 a 1100 gr de racion de cachorro por dia',
      )
    } else {
      alert(
        'Necesita una racion de entre 500 a 700 gr de racion de adulto por dia',
      )
    }
  }
}

const calculoGato = (gato) => {
  let pesoKilos = gato.peso / 1000

  if (gato.edad < 6) {
    alert(`Necesita una racion de ${parseInt(pesoKilos * 0.1 * 1000)} gr/dia`)
  } else {
    switch (gato.actividad) {
      case 'casero':
        alert(`Necesita una racion de ${pesoKilos * 0.03 * 1000} gr/dia`)

        break
      case 'explorador':
        alert(`Necesita una racion de ${pesoKilos * 0.06 * 1000} gr/dia`)

        break

      default:
        alert('Tipo ingresado incorrecto')
        break
    }
  }
}

let accion
let nombre
let mensaje

do {
  nombre = true
  accion = prompt('Elija a su mascota \n1. Perro\n2. Gato\n0. Salir')

  //Calculo perros

  if (accion == 1) {
    const nombres = perros.map((el) => el.nombre)
    mensaje = nombres.join('\n')

    while (nombre) {
      nombre = prompt(
        `Escriba el nombre de su mascota \n${mensaje} \nSalir`,
      ).toLowerCase()

      let perritos = perros.find((el) => el.nombre.toLowerCase() === nombre)

      if (perritos != undefined) {
        calculoPerro(perritos)
        break
      } else if (nombre == 'salir') {
        alert('Muchas gracias, vuelva pronto')
        nombre = false
      } else {
        alert('Vuelva a ingresar el dato')
      }
    }
  }

  //Calculo gatos
  else if (accion == 2) {
    const nombres = gatos.map((el) => el.nombre)
    mensaje = nombres.join('\n')

    while (nombre) {
      nombre = prompt(
        `Escriba nombre de su mascota \n${mensaje} \nSalir`,
      ).toLowerCase()

      let gatitos = gatos.find((el) => el.nombre.toLowerCase() === nombre)

      if (gatitos != undefined) {
        calculoGato(gatitos)
        break
      } else if (nombre == 'salir') {
        alert('Muchas gracias, vuelva pronto')
        nombre = false
      } else {
        alert('Vuelva a ingresar el dato')
      }
    }
  } else if (accion == 0) {
    alert('¡¡Vuelva Pronto!!')
  } else {
    alert('valor ingresado incorrecto')
  }
} while (accion != 0)
