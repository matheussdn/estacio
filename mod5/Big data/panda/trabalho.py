import pandas as pd

df = pd.read_csv(
    "Dados.csv",
    sep=";",
    engine="python"
)

print("========== INFORMAÇÕES DO DATAFRAME ==========")
df.info()

print("\n========== PRIMEIRAS 10 LINHAS ==========")
print(df.head(10))

print("\n========== ÚLTIMAS 10 LINHAS ==========")
print(df.tail(10))

dados = df.copy()

dados["Calories"] = dados["Calories"].fillna(0)

print("\n========== CALORIES CORRIGIDO ==========")
print(dados)

dados["Date"] = dados["Date"].fillna("1900/01/01")

print("\n========== DATE COM 1900/01/01 ==========")
print(dados)

try:
    dados["Date"] = pd.to_datetime(
        dados["Date"],
        format="'%Y/%m/%d'"
    )
except ValueError as erro:
    print("\nErro esperado na primeira conversão:")
    print(erro)

dados["Date"] = dados["Date"].replace(
    "1900/01/01",
    pd.NaT
)

try:
    dados["Date"] = pd.to_datetime(
        dados["Date"],
        format="'%Y/%m/%d'"
    )
except ValueError as erro:
    print("\nErro esperado por causa do valor 20201226:")
    print(erro)

dados["Date"] = dados["Date"].replace(
    "20201226",
    pd.to_datetime("20201226", format="%Y%m%d")
)

dados["Date"] = pd.to_datetime(
    dados["Date"],
    format="'%Y/%m/%d'"
)

print("\n========== DATAS CONVERTIDAS ==========")
print(dados)

dados = dados.dropna(subset=["Date"])

print("\n========== DATAFRAME FINAL ==========")
print(dados)

print("\n========== INFORMAÇÕES FINAIS ==========")
dados.info()

print("\n========== VALORES NULOS ==========")
print(dados.isnull().sum())