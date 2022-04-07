let stred = [2, 2]
let A = [2, 1]
let B = [0, 2]
let C = [3, 2]
let x = A
let counter = 0
basic.forever(function on_forever() {
    led.plotBrightness(stred[0], stred[1], 100)
    led.plot(A[0], A[1])
    led.plot(B[0], B[1])
    led.plot(C[0], C[1])
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    otaceni(0)
})
function otaceni(y: number) {
    
    basic.clearScreen()
    while (counter != 3) {
        counter += 1
        x.reverse()
        if (x[y] == 0) {
            x[y] = 4
        } else if (x[y] == 4) {
            x[y] = 0
        } else if (x[y] == 3) {
            x[y] = 1
        } else if (x[y] == 1) {
            x[y] = 3
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
}

// B.reverse()
// C.reverse()
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    otaceni(1)
})
