stred=[2,2]
A=[2,1]
B=[0,2]
C=[4,2]
a1=A[1]
b1=B[1]
c1=C[1]
x=1
y=0
counter=0
def on_forever():
    led.plot(stred[0], stred[1])
    led.plot(A[0],A[1])
    led.plot(B[0],B[1])
    led.plot(C[0],C[1])
basic.forever(on_forever)

def on_button_pressed_a():
    global A, B, C, counter, a1, b1, c1
    basic.clear_screen()
    counter+=1
    if counter ==1:
        A.reverse()
    elif counter ==2:
        A[0]+=a1
        A[1]+=a1
    elif counter ==3:
        A.reverse()
    elif counter ==4:
        A[0]-=a1
        A[1]-=a1
        counter=0

    if counter ==1:
        B.reverse()
    elif counter ==2:
        B[0]+=b1
        B[1]+=b1
    elif counter ==3:
        B.reverse()
    elif counter ==4:
        B[0]-=b1
        B[1]-=b1
        counter=0

    if counter ==1:
        C.reverse()
    elif counter ==2:
        C[0]+=c1
        C[1]+=c1
    elif counter ==3:
        C.reverse()
    elif counter ==4:
        C[0]-=c1
        C[1]-=c1
        counter=0
    
    #B.reverse()
    #C.reverse()
input.on_button_pressed(Button.A, on_button_pressed_a)