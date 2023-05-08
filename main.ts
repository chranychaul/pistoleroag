radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    }
    if (receivedNumber == 3) {
        basic.clearScreen()
        basic.showIcon(IconNames.Sad)
    }
    if (receivedNumber == 1) {
        basic.clearScreen()
        basic.showIcon(IconNames.Asleep)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        `)
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # #
        . # # . .
        . # . . .
        `)
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showLeds(`
        . # . . .
        . # # # .
        . . . # .
        . # # # .
        . # . . .
        `)
    radio.sendNumber(3)
})
radio.setGroup(9)
