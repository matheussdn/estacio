from pessoa import Pessoa


p1 = Pessoa('João', '2000-01-01', '000.111.222-33', '15975388-1')

p1._nome = "Ana"

attrs = vars(p1)

print(', '.join("%s: %s" % item for item in attrs.items()))