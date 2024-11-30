class Pessoa:
    def __init__(self, nome, numeroConta, dataAberturaConta, status):
        self._nome = nome
        self._numeroConta = numeroConta
        self._dataAberturaConta = dataAberturaConta
        self._status = status

  
    @property
    def nome(self):
        return self._nome

    @nome.setter
    def nome(self, nome):
        self._nome = nome

    
    @property
    def numeroConta(self):
        return self._numeroConta

    @numeroConta.setter
    def numeroConta(self, numeroConta):
        self._numeroConta = numeroConta

   
    @property
    def dataAberturaConta(self):
        return self._dataAberturaConta

    @dataAberturaConta.setter
    def dataAberturaConta(self, dataAberturaConta):
        self._dataAberturaConta = dataAberturaConta

    
    @property
    def status(self):
        return self._status

    @status.setter
    def status(self, status):
        self._status = status

   
    def imprimir_atributos(self):
        attrs = vars(self)
        f_attrs = ', '.join(f"{attr[1:]}: {value}" for attr, value in attrs.items())
        print(f_attrs)