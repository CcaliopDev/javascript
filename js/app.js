//Pedir informacion al usuario
alert(
  'Bienvenido al simulador de raciones, ingresa los datos de tu mascota a continuacion, recuerda que esto no reemplaza la observacion de un veterinario',
)
//while

let TIPO = prompt('Ingrese tipo de mascota (gato o perro)').toLowerCase()

while (TIPO != 'gato' && TIPO != 'perro') {
  alert('Tipo ingresado no es valido, vuelva a intentarlo')
  TIPO = prompt('Ingrese tipo de mascota (gato o perro)').toLowerCase()
}

const EDAD = prompt('Ingrese edad en meses, expresado en numeros')
const PESO = prompt('Ingrese peso en gramos')

//recolectar informacion y procesarla

const calculoGato = (edad, peso) => {
  let pesoKilos = peso / 1000

  if (edad < 6) {
    alert(`Necesita una racion de ${pesoKilos * 0.1 * 1000} gr/dia`)
  } else {
    let TIPO = prompt('Ingrese tipo (casero o explorador)').toLowerCase()

    //while
    while (TIPO != 'casero' && TIPO != 'explorador') {
      alert('Tipo ingresado no es valido, vuelva a intentarlo')
      TIPO = prompt('Ingrese tipo (casero o explorador)').toLowerCase()
    }

    switch (TIPO) {
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

const calculoPerro = (edad, peso) => {
  if (peso <= 1200) {
    if (edad <= 3) {
      alert(
        'Necesita una racion de entre 25 a 240 gr de racion de cachorro por dia',
      )
    } else if (edad <= 5) {
      alert(
        'Necesita una racion de entre 40 a 280 gr de racion de cachorro por dia',
      )
    } else if (edad <= 8) {
      alert(
        'Necesita una racion de entre 45 a 290 gr de racion de cachorro por dia',
      )
    } else if (edad <= 12) {
      alert(
        'Necesita una racion de entre 40 a 130 gr de racion de adulto por dia',
      )
    } else {
      alert(
        'Necesita una racion de entre 100 a 180 gr de racion de adulto por dia',
      )
    }
  } else if (peso <= 4500) {
    if (edad <= 3) {
      alert(
        'Necesita una racion de entre 130 a 590 gr de racion de cachorro por dia',
      )
    } else if (edad <= 5) {
      alert(
        'Necesita una racion de entre 240 a 760 gr de racion de cachorro por dia',
      )
    } else if (edad <= 8) {
      alert(
        'Necesita una racion de entre 280 a 840 gr de racion de cachorro por dia',
      )
    } else if (edad <= 12) {
      alert(
        'Necesita una racion de entre 290 a 700 gr de racion de cachorro por dia',
      )
    } else {
      alert(
        'Necesita una racion de entre 320 a 500 gr de racion de adulto por dia',
      )
    }
  } else {
    if (edad <= 3) {
      alert(
        'Necesita una racion de entre 280 a 700 gr de racion de cachorro por dia',
      )
    } else if (edad <= 5) {
      alert(
        'Necesita una racion de entre 590 a 1020 gr de racion de cachorro por dia',
      )
    } else if (edad <= 8) {
      alert(
        'Necesita una racion de entre 760 a 1100 gr de racion de cachorro por dia',
      )
    } else if (edad <= 12) {
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

switch (TIPO) {
  case 'gato':
    calculoGato(EDAD, PESO)
    break
  case 'perro':
    calculoPerro(EDAD, PESO)
    break

  default:
    alert('Tipo ingresado incorrecto')
    break
}
