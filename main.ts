input.onButtonPressed(Button.A, function () {
    if (Interuptor) {
        Interuptor = false
        basic.showString("OFF")
    } else {
        basic.showString("ON")
        Interuptor = true
    }
})
let Interuptor = false
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
    if (Interuptor) {
        if (input.lightLevel() > 128) {
            pins.digitalWritePin(DigitalPin.P0, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
    }
})
