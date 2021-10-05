let compararThis = function (param) {
    console.log(this === param)
}

compararThis(global) //true

const object = {}

compararThis  = compararThis.bind(object)
compararThis(global) //false
compararThis(object) //true


//arrow

let arrowCompararThis = param => console.log(this === param)
arrowCompararThis(global) //false
arrowCompararThis(module.exports) //true

compararThis(this) //false
arrowCompararThis(this) //true

arrowCompararThis = arrowCompararThis.bind(object)
arrowCompararThis(object) //false
arrowCompararThis(module.exports) //true