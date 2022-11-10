let 燈 = 0
let aX = 0
let X = 0
let bX = 0
let 燈2 = 0
basic.forever(function () {
    if (燈 == 4) {
        bX = -1
    }
    if (燈 == 0) {
        bX = 1
    }
    led.plot(燈, 0)
    led.plot(燈, 1)
    led.plot(燈, 2)
    led.plot(燈, 3)
    led.plot(燈, 4)
    basic.pause(100)
    led.unplot(燈, 0)
    led.unplot(燈, 1)
    led.unplot(燈, 2)
    led.unplot(燈, 3)
    led.unplot(燈, 4)
    燈 = 燈 + aX
})
basic.forever(function () {
    if (燈2 == 4) {
        bX = -1
    }
    if (燈2 == 0) {
        bX = 1
    }
    led.unplot(燈2, 0)
    led.unplot(燈2, 1)
    led.unplot(燈2, 2)
    led.unplot(燈2, 3)
    led.unplot(燈2, 4)
    basic.pause(100)
    led.plotBrightness(燈2, 0, 200)
    led.plotBrightness(燈2, 1, 200)
    led.plotBrightness(燈2, 2, 200)
    led.plotBrightness(燈2, 3, 200)
    led.plotBrightness(燈2, 4, 200)
    燈2 = 燈2 + bX
})
