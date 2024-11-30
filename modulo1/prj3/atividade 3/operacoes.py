def calcular_media(notas):
    return sum(notas) / len(notas)

def verificar_reprovacao(media):  
    return media < 6

def alunos_reprovados(dados_alunos, matriculas_reprovados):
  
    reprovados = []
    for aluno in dados_alunos:
        nome, matricula, media = aluno['nome'], aluno['matricula'], aluno['media']
        if matricula in matriculas_reprovados:
            reprovados.append(f"Aluno Reprovado: {nome} -- Matrícula: {matricula}  -- Média Final: {media:.2f}")
    return reprovados