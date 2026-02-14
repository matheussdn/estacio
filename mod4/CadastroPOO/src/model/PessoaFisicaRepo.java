package model;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class PessoaFisicaRepo {

    private List<PessoaFisica> pessoas = new ArrayList<>();

    public void inserir(PessoaFisica pf) {
        pessoas.add(pf);
    }

    public void alterar(PessoaFisica pf) {
        for (int i = 0; i < pessoas.size(); i++) {
            if (pessoas.get(i).getId() == pf.getId()) {
                pessoas.set(i, pf);
                return;
            }
        }
    }

    public void excluir(int id) {
        pessoas.removeIf(p -> p.getId() == id);
    }

    public PessoaFisica obter(int id) {
        for (PessoaFisica pf : pessoas) {
            if (pf.getId() == id) {
                return pf;
            }
        }
        return null;
    }

    public List<PessoaFisica> obterTodos() {
        return pessoas;
    }

    public void persistir(String nomeArquivo) throws Exception {
        ObjectOutputStream oos =
                new ObjectOutputStream(new FileOutputStream(nomeArquivo));
        oos.writeObject(pessoas);
        oos.close();
    }

    @SuppressWarnings("unchecked")
    public void recuperar(String nomeArquivo) throws Exception {
        ObjectInputStream ois =
                new ObjectInputStream(new FileInputStream(nomeArquivo));
        pessoas = (List<PessoaFisica>) ois.readObject();
        ois.close();
    }
}