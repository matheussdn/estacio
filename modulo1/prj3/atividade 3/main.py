from operacoes import calcular_media, verificar_reprovacao, alunos_reprovados


dados_alunos = [
    {'nome': 'Maria', 'matricula': 26, 'notas': [8 , 7 , 5 , 9]},
    {'nome': 'Ana', 'matricula': 101, 'notas': [9 , 9 , 8 , 9]},
    {'nome': 'João', 'matricula': 13, 'notas': [6 , 5  ,5 , 5]},
    {'nome': 'Ágatha', 'matricula': 37, 'notas': [8 , 6 , 7.5 , 9]},
    {'nome': 'Joaquim', 'matricula': 72, 'notas': [6 , 5.5 , 5,7]},
    {'nome': 'Félix', 'matricula': 5, 'notas': [10 , 8 , 8 , 8]},
]


for aluno in dados_alunos:
    aluno['media'] = calcular_media(aluno['notas'])


matriculas_reprovados = [
    aluno['matricula'] for aluno in dados_alunos if verificar_reprovacao(aluno['media'])
]


mensagens_reprovados = alunos_reprovados(dados_alunos, matriculas_reprovados)


for mensagem in mensagens_reprovados:
    print(mensagem)