let contador_1 = 0
let primeiro_valor = 0
let resultado = 0
let segundo_valor = 0
let contador_2 = 0
input.onButtonPressed(Button.A, function () {
    if (contador_1 == 0) {
        contador_1 = 1
        primeiro_valor = primeiro_valor + contador_1
    }
    contador_1 = 0
})
input.onButtonPressed(Button.AB, function () {
    resultado = primeiro_valor + segundo_valor
    basic.showNumber(resultado)
    primeiro_valor = 0
    segundo_valor = 0
    resultado = 0
})
input.onButtonPressed(Button.B, function () {
    if (contador_2 == 0) {
        contador_2 = 1
        segundo_valor = segundo_valor + contador_2
    }
    contador_2 = 0
})
