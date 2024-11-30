import random

def ordenar_array_numeros():

    array_numeros = random.sample(range(1, 100), 15)

    print("Array original (não ordenado):", array_numeros)

    array_numeros.sort()
    print("Array ordenado de forma crescente:", array_numeros)

    array_numeros.sort(key=None, reverse=True)
    print("Array ordenado de forma decrescente:", array_numeros)

def ordenar_array_strings():

    array_strings = ["nome", "dataNascimento", "cpf", "rg"]


    print("\nArray de strings original (não ordenado):", array_strings)


    array_strings.sort()
    print("Array de strings ordenado de forma crescente:", array_strings)


    array_strings.sort(key=None, reverse=True)
    print("Array de strings ordenado de forma decrescente:", array_strings)

ordenar_array_numeros()
ordenar_array_strings()