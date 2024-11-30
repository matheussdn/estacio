set_inicial = {11, 12, 13, 14}  
print("Set inicial:", set_inicial)  
  

set_inicial.add(15)  
print("Set depois de adicionar 15:", set_inicial)  
  
 
set_inicial.update({1, 2, 3, 4, 5})  
print("Set depois de atualizar usando update:", set_inicial)  
  
  
set_inicial.discard(13)  
print("Set após remover 13:", set_inicial)  
  

novo_set = {20, 21, 23, 1, 2}  
print("Set Novo:", novo_set)  
  

print("União:", set_inicial.union(novo_set))  
  

print("Interseção:", set_inicial.intersection(novo_set))  
  

print("Diferença:", set_inicial.difference(novo_set))  
  

print("diferença simetrica:", set_inicial.symmetric_difference(novo_set))
