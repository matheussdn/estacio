from pessoa import Pessoa

class PessoaFisica(Pessoa):
    def __init__(self, nome, numeroConta, dataAberturaConta, status, dataNascimento, cpf, rg):
        super().__init__(nome, numeroConta, dataAberturaConta, status)
        self._dataNascimento = dataNascimento
        self._cpf = None  
        self.cpf = cpf  
        self._rg = rg

    
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

    
    def imprimir_atributos(self):
        super().imprimir_atributos()  
        print(f"dataNascimento: {self._dataNascimento}, cpf: {self._cpf}, rg: {self._rg}")