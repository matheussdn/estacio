print("Selecione")  
print("1. Adição")  
print("2. Subtração")  
print("3. Multiplicação")  
print("4. Divisão")  
  
while True:  
    escolha = input("Digite sua escolha (1, 2, 3 ou 4): ")  
    if escolha in ('1', '2', '3', '4'):  
        num1 = float(input("Digite o primeiro número: "))  
        num2 = float(input("Digite o segundo número: "))  
        if escolha == '1':  
            resultado = num1 + num2  
            operacao = "Adição"  
        elif escolha == '2':  
            resultado = num1 - num2  
            operacao = "Subtração"  
        elif escolha == '3':  
            resultado = num1 * num2  
            operacao = "Multiplicação"  
        elif escolha == '4':  
            if num2!= 0:  
                resultado = num1 / num2  
                operacao = "Divisão"  
            else:  
                resultado = "Erro! Divisão de 0."  
                operacao = "Divisão"  
        print(f"Resultado da {operacao}: {num1} { '+' if escolha == '1' else '-' if escolha == '2' else '*' if escolha == '3' else '/' } {num2} = {resultado}")  
        break  
    else:  
        print("Número inválido") 