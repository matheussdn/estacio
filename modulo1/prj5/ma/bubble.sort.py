def bubbleSort(array):

    for i in range(len(array)):

        for j in range(0, len(array) - i - 1):
            if array[j] > array[j + 1]:

                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp


array_numeros = [65, 34, 25, 12, 22, 11, 90, 76, 53, 38, 9, 17, 42, 28, 100]


bubbleSort(array_numeros)


print("Array ordenado:", array_numeros)