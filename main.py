def on_button_pressed_a():
    global primeiro_valor
    primeiro_valor += primeiro_valor + 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global resultado
    resultado = primeiro_valor + segundo_valor
    basic.show_number(resultado)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_b():
    global segundo_valor
    segundo_valor += segundo_valor + 1
input.on_button_pressed(Button.B, on_button_pressed_b)

resultado = 0
segundo_valor = 0
primeiro_valor = 0
primeiro_valor = 0
segundo_valor = 0
resultado = 0