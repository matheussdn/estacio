from pessoa import Pessoa

class PessoaJuridica(Pessoa):
    def __init__(self, nome, numeroConta, dataAberturaConta, status, dataAberturaEmpresa, cnpj):
        super().__init__(nome, numeroConta, dataAberturaConta, status)
        self._dataAberturaEmpresa = dataAberturaEmpresa
        self._cnpj = None  
        self.cnpj = cnpj  

    
    @property
    def dataAberturaEmpresa(self):
        return self._dataAberturaEmpresa

    @dataAberturaEmpresa.setter
    def dataAberturaEmpresa(self, dataAberturaEmpresa):
        self._dataAberturaEmpresa = dataAberturaEmpresa

    
    @property
    def cnpj(self):
        return self._cnpj

    @cnpj.setter
    def cnpj(self, cnpj):
        if len(cnpj) != 18:
            raise ValueError("O CNPJ deve conter 18 caracteres (no formato 00.000.000/0001-00).")
        self._cnpj = cnpj

   
    def imprimir_atributos(self):
        super().imprimir_atributos()  
        print(f"dataAberturaEmpresa: {self._dataAberturaEmpresa}, cnpj: {self._cnpj}")