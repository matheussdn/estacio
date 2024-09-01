class Calculadora:
    def __init__(self):
        self._valorA = 0
        self._valorB = 0
        self._operacao = ''


    @property
    def valorA(self):
        return self._valorA

    @valorA.setter
    def valorA(self, valor):
        self._valorA = valor

    @property
    def valorB(self):
        return self._valorB

    @valorB.setter
    def valorB(self, valor):
        self._valorB = valor

    @property
    def operacao(self):
        return self._operacao

    @operacao.setter
    def operacao(self, op):
        self._operacao = op

    def validarOperacao(self, operacao):
        if operacao in ['+', '-', '*', '/']:
            return True
        return False


    def calcular(self):
        if not self.validarOperacao(self.operacao):
            print("Operação inválida!")
            exit()

        if self.operacao == '+':
            return self.valorA + self.valorB
        elif self.operacao == '-':
            return self.valorA - self.valorB
        elif self.operacao == '*':
            return self.valorA * self.valorB
        elif self.operacao == '/':
            if self.valorB == 0:
                print("Não é possível dividir por zero!")
                exit()
            return self.valorA / self.valorB


    def mostrarResultado(self):
        print(str(self.valorA) + ' ' + self.operacao + ' ' + str(self.valorB) + ' = ' + str(self.calcular()))


    def entradaDados(self):
        self.valorA = float(input("Digite o valor A: "))
        self.valorB = float(input("Digite o valor B: "))
        self.operacao = input("Digite a operação (+, -, *, /): ")
