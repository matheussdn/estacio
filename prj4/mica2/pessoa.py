class Pessoa:
    def __init__(self, nome, dataNascimento, cpf, rg):
        self._nome = nome
        self._dataNascimento = dataNascimento
        self._cpf = None
        self.cpf = cpf  
        self._rg = rg

    @property
    def nome(self):
        return self._nome

    @nome.setter
    def nome(self, nome):
        self._nome = nome

    @property
    def dataNascimento(self):
        return self._dataNascimento

    @dataNascimento.setter
    def dataNascimento(self, dataNascimento):
        self._dataNascimento = dataNascimento

    @property
    def cpf(self):
        return self._cpf

    @cpf.setter
    def cpf(self, cpf):
        if len(cpf) != 14:
            raise ValueError("O CPF deve conter 14 caracteres (no formato 000.000.000-00).")
        self._cpf = cpf

    @property
    def rg(self):
        return self._rg

    @rg.setter
    def rg(self, rg):
        self._rg = rg