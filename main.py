stred=[2,2]
A=[2,1]
B=[0,2]
C=[3,2]
x=A
counter=0
def on_forever():
    led.plot_brightness(stred[0], stred[1], 100)
    led.plot(A[0],A[1])
    led.plot(B[0],B[1])
    led.plot(C[0],C[1])
    
basic.forever(on_forever)
def on_button_pressed_a():
    otaceni(1)
def on_button_pressed_b():
    otaceni(0)
input.on_button_pressed(Button.B, on_button_pressed_b)
def otaceni(y):
    global A, B, C, counter, x
    basic.clear_screen()
    while counter!=3:
        counter+=1
        x.reverse()
        if x[y]==0:
            x[y]=4
        elif x[y]==4:
            x[y]=0
        elif x[y]==3:
            x[y]=1
        elif x[y]==1:
            x[y]=3
        if counter==1:
            x=B
        if counter==2:
            x=C
    counter=0
    x=A
    
    
    #B.reverse()
    #C.reverse()
input.on_button_pressed(Button.A, on_button_pressed_a)