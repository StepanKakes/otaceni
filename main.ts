let stred = [2, 2]
let A = [2, 1]
let B = [0, 2]
let C = [3, 2]
let x = A
let y = 1
let counter = 0
basic.forever(function on_forever() {
    led.plotBrightness(stred[0], stred[1], 100)
    led.plot(A[0], A[1])
    led.plot(B[0], B[1])
    led.plot(C[0], C[1])
})
// B.reverse()
// C.reverse()
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    basic.clearScreen()
    while (counter != 3) {
        counter += 1
        console.logValue("counter", counter)
        console.logValue("A", A)
        console.logValue("b", B)
        console.logValue("C", C)
        console.logValue("x", x)
        x.reverse()
        if (x[1] == 0) {
            x[1] = 4
        } else if (x[1] == 4) {
            x[1] = 0
        } else if (x[1] == 3) {
            x[1] = 1
        } else if (x[1] == 1) {
            x[1] = 3
        }
        
        if (counter == 1) {
            x = B
        }
        
        if (counter == 2) {
            x = C
        }
        
    }
    counter = 0
    x = A
})
