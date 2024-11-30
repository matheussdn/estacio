
arquivo = open('texto.txt', 'w')

texto = list()

texto.append("Primeira linha do arquivo.\n")
texto.append("Segunda linha do arquivo.\n")
texto.append("Terceira linha do arquivo.\n")

for linha in texto:
    arquivo.write(linha)


arquivo.close()

print("Arquivo 'texto.txt' criado e preenchido com sucesso!")