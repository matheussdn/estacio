def main():
    
    lista_mesclada = [1, 2, 3, "Olá, Python", True, 12.6]
    print("Conteúdo inicial da lista:", lista_mesclada)
    
  
    lista_mesclada.append(["Lista aninhada"])
    print("Conteúdo da lista após append:", lista_mesclada)
    
    
    lista_mesclada.insert(4, 5)
    print("Conteúdo da lista após insert na posição 4:", lista_mesclada)
    
   
    print("Tamanho atual da lista:", len(lista_mesclada))
    
  
    lista_mesclada.pop(1)
    print("Conteúdo da lista após remoção do item na posição 1:", lista_mesclada)
    
   
    nova_lista_mesclada = lista_mesclada[:4]
    print("Conteúdo da nova lista:", nova_lista_mesclada)

if __name__ == "__main__":
    main()