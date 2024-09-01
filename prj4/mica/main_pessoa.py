from pessoa import Pessoa


p1 = Pessoa('João', '2000-01-01', '000.111.222-33', '15975388-1')

attrs = vars(p1)

p1.alterarStatus(False)
print(', '.join("%s: %s" % item for item in attrs.items()))