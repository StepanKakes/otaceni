let stred = [2, 2]
let A = [2, 1]
let B = [0, 2]
let C = [4, 2]
let a1 = A[1]
let b1 = B[1]
let c1 = C[1]
let x = 1
let y = 0
let counter = 0
basic.forever(function on_forever() {
    led.plot(stred[0], stred[1])
    led.plot(A[0], A[1])
    led.plot(B[0], B[1])
    led.plot(C[0], C[1])
})
// B.reverse()
// C.reverse()
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    basic.clearScreen()
    counter += 1
    if (counter == 1) {
        A.reverse()
    } else if (counter == 2) {
        A[0] += a1
        A[1] += a1
    } else if (counter == 3) {
        A.reverse()
    } else if (counter == 4) {
        A[0] -= a1
        A[1] -= a1
        counter = 0
    }
    
    if (counter == 1) {
        B.reverse()
    } else if (counter == 2) {
        B[0] += b1
        B[1] += b1
    } else if (counter == 3) {
        B.reverse()
    } else if (counter == 4) {
        B[0] -= b1
        B[1] -= b1
        counter = 0
    }
    
    if (counter == 1) {
        C.reverse()
    } else if (counter == 2) {
        C[0] += c1
        C[1] += c1
    } else if (counter == 3) {
        C.reverse()
    } else if (counter == 4) {
        C[0] -= c1
        C[1] -= c1
        counter = 0
    }
    
})
