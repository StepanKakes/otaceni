stred=[2,2]
A=[2,1]
B=[0,2]
C=[3,2]
x=A
y=1
counter=0
def on_forever():
    led.plot_brightness(stred[0], stred[1], 100)
    led.plot(A[0],A[1])
    led.plot(B[0],B[1])
    led.plot(C[0],C[1])
    
basic.forever(on_forever)

def on_button_pressed_a():
    global A, B, C, counter, x,y
    basic.clear_screen()
    while counter!=3:
        counter+=1
        console.log_value("counter", counter)
        console.log_value("A", A)
        console.log_value("b", B)
        console.log_value("C", C)
        console.log_value("x", x)
        x.reverse()
        if x[1]==0:
            x[1]=4
        elif x[1]==4:
            x[1]=0
        elif x[1]==3:
            x[1]=1
        elif x[1]==1:
            x[1]=3
        if counter==1:
            x=B
        if counter==2:
            x=C
        
    counter=0
    x=A

    
   

    
    
    #B.reverse()
    #C.reverse()
input.on_button_pressed(Button.A, on_button_pressed_a)