import time

def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

def ordenar_e_comparar_metodos(caminho_arquivo):

    lista_palavras = []

    with open(caminho_arquivo, 'r') as arquivo:
        for linha in arquivo:
            lista_palavras.extend(linha.split())

    lista_bolha = lista_palavras[:]
    tempo_inicial = time.time()
    bubble_sort(lista_bolha)
    tempo_bubble = time.time() - tempo_inicial
    print(f"Bubble Sort: {tempo_bubble:.6f} segundos")

    lista_selecao = lista_palavras[:]
    tempo_inicial = time.time()
    selection_sort(lista_selecao)
    tempo_selection = time.time() - tempo_inicial
    print(f"Selection Sort: {tempo_selection:.6f} segundos")

    lista_sort = lista_palavras[:]
    tempo_inicial = time.time()
    lista_sort.sort()
    tempo_sort = time.time() - tempo_inicial
    print(f"Sort nativo: {tempo_sort:.6f} segundos")

    tempos = {
        'bubble_sort': tempo_bubble,
        'selection_sort': tempo_selection,
        'sort_nativo': tempo_sort
    }
    
    melhor_metodo = min(tempos, key=tempos.get)
    print(f"Melhor método: {melhor_metodo}")

    lista_ordenada = lista_bolha if melhor_metodo == 'bubble_sort' else lista_selecao if melhor_metodo == 'selection_sort' else lista_sort

    with open('palavras_ordenadas.txt', 'w') as arquivo_saida:
        arquivo_saida.write('\n'.join(lista_ordenada))

ordenar_e_comparar_metodos('ordem.txt')