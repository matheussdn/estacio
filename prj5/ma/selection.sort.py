def selectionSort(array):

    for i in range(len(array)):

        min_idx = i


        for j in range(i + 1, len(array)):

            if array[j] < array[min_idx]:
                min_idx = j


        array[i], array[min_idx] = array[min_idx], array[i]


array_numeros = [64, 25, 12, 22, 11, 90, 76, 53, 38, 9, 17, 42, 28, 100, 65]


selectionSort(array_numeros)


print("Array ordenado:", array_numeros)