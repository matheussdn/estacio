d = {1: {'nome': 'Maria', 'idade': 26, 'nacionalidade': 'brasileira'}}  

d.update({'peso': '50kg'})  
print("Dicionário atualizado :", d)  
  
d_copy = d.copy()  
  
if 'idade' in d:  
   removed_element = d.pop('idade')  
   print("elemento removido:", removed_element)  
else:  
   print("Chave'idade' não encontrada no dicionário.")  
  

print("Dicionario original depois de removido 'idade':", d)  
  

if d:  
   removed_item = d.popitem()  
   print("item removido:", removed_item)  
else:  
   print("o dicionario esta vazio.")  
  

print("dicionário depois de removido os items:", d)  
  

d.clear()  
d_copy.clear()  
print("Dicionário original depois de limpo:", d)  
print("Dicionário cópia depois de limpo:", d_copy)  
  

new_dict = dict.fromkeys(['nome', 'idade', 'nacionalidade', 'peso'],)  
new_dict['nome'] = 'Michael'  
new_dict['idade'] = 28  
new_dict['nacionalidade'] = 'USA'  
new_dict['peso'] = '72kg'  
  

print("novo items:", new_dict.items())  
  
 
print("novo chaves:", new_dict.keys())  
  

print("novo valores:", new_dict.values())