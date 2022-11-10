let 燈 = 0
basic.forever(function () {
    if (燈 < 6) {
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
        燈 += 1
    } else if (燈 < 10 && 5 < 燈) {
        led.plot(9 - 燈, 0)
        led.plot(9 - 燈, 1)
        led.plot(9 - 燈, 2)
        led.plot(9 - 燈, 3)
        led.plot(9 - 燈, 4)
        basic.pause(100)
        led.unplot(9 - 燈, 0)
        led.unplot(9 - 燈, 1)
        led.unplot(9 - 燈, 2)
        led.unplot(9 - 燈, 3)
        led.unplot(9 - 燈, 4)
        燈 += 1
    } else {
        if (燈 > 9) {
            燈 = 1
        }
    }
})
