
arquivo = open('loremipsum.txt', 'r')


conteudo = arquivo.read()
print("Conteúdo completo do arquivo:\n", conteudo)


arquivo.close()


arquivo = open('loremipsum.txt', 'r')


primeira_linha = arquivo.readline()
print("\nPrimeira linha do arquivo:", primeira_linha)


arquivo.seek(0)
primeiros_3_caracteres = arquivo.read(3)
print("\nPrimeiros 3 caracteres do arquivo:", primeiros_3_caracteres)


arquivo.close()


with open('loremipsum.txt', 'r') as arquivo:
    conteudo_with = arquivo.read()
    print("\nConteúdo do arquivo (com 'with'):\n", conteudo_with)