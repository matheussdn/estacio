meu_dicionario = {
    1: {"codigo": 1, "linguagem": "Python"},
    2: {"codigo": 2, "linguagem": "Java"},
    3: {"codigo": 3, "linguagem": "PHP"}
}
print("Conteúdo do dicionário 'meu_dicionario':", meu_dicionario)

print("Tipo de dados do dicionário:", type(meu_dicionario))

print("Valor da chave 'linguagem' do código 1:", meu_dicionario[1].get("linguagem"))

print("Tamanho do dicionário 'meu_dicionario':", len(meu_dicionario))

dicionario_frutas = dict({
    1: dict(nome="limão", tipo="ácida"),
    2: dict(nome="laranja", tipo="ácida"),
    3: dict(nome="manga", tipo="semiácida"),
    4: dict(nome="maçã", tipo="semiácida"),
    5: dict(nome="banana", tipo="doce"),
    6: dict(nome="mamão", tipo="doce")
})

print("Chave 1 - Nome:", dicionario_frutas[1]["nome"], ", Tipo:", dicionario_frutas[1]["tipo"])

print("Chave 2 - Nome:", dicionario_frutas[2]["nome"], ", Tipo:", dicionario_frutas[2]["tipo"])


print("Iterando sobre 'dicionario_frutas':")
for key, value in dicionario_frutas.items():
    print(f"Chave {key} - Nome: {value['nome']}, Tipo: {value['tipo']}")
