input.onButtonPressed(Button.A, function () {
    if (Ajuste) {
        Brillo += 1
    } else {
        if (Interuptor) {
            Interuptor = false
            basic.showString("OFF")
        } else {
            basic.showString("ON")
            Interuptor = true
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Interuptor && Ajuste) {
        numeros = false
        basic.clearScreen()
        basic.showString("Ajuste guardado")
        Ajuste = false
    }
})
input.onButtonPressed(Button.B, function () {
    if (Interuptor) {
        if (!(Ajuste)) {
            Ajuste = true
            basic.showString("Ajuste")
            basic.showString("x10")
            numeros = true
        } else {
            Brillo += -1
        }
    }
})
let numeros = false
let Interuptor = false
let Ajuste = false
let Brillo = 12
Ajuste = false
Interuptor = false
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P0, 1)
basic.showIcon(IconNames.Happy)
for (let index = 0; index < 3; index++) {
    led.enable(false)
    basic.pause(100)
    led.enable(true)
    basic.pause(100)
}
basic.clearScreen()
basic.showString("Welcome")
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    if (numeros) {
        basic.showNumber(Brillo)
    }
})
basic.forever(function () {
    if (Interuptor && !(Ajuste)) {
        if (input.lightLevel() > Brillo * 10) {
            pins.digitalWritePin(DigitalPin.P0, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
