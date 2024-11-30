from pessoa import Pessoa
from pessoa_fisica import PessoaFisica
from pessoa_juridica import PessoaJuridica


p1 = Pessoa('João Silva', '123456', '2022-01-01', 'Ativa')
p1.imprimir_atributos()  

print("\n---\n")


pessoa_fisica = PessoaFisica('Maria Oliveira', '654321', '2021-05-15', 'Ativa', '1990-03-25', '123.456.789-00', 'MG1234567')
pessoa_fisica.imprimir_atributos()  

print("\n---\n")


pessoa_juridica = PessoaJuridica('Empresa Y', '789123', '2010-09-10', 'Ativa', '2005-06-15', '12.345.678/0001-90')
pessoa_juridica.imprimir_atributos()  
