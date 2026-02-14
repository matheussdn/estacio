package model;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class PessoaJuridicaRepo {

    private List<PessoaJuridica> pessoas = new ArrayList<>();

    public void inserir(PessoaJuridica pj) {
        pessoas.add(pj);
    }

    public void alterar(PessoaJuridica pj) {
        for (int i = 0; i < pessoas.size(); i++) {
            if (pessoas.get(i).getId() == pj.getId()) {
                pessoas.set(i, pj);
                return;
            }
        }
    }

    public void excluir(int id) {
        pessoas.removeIf(p -> p.getId() == id);
    }

    public PessoaJuridica obter(int id) {
        for (PessoaJuridica pj : pessoas) {
            if (pj.getId() == id) {
                return pj;
            }
        }
        return null;
    }

    public List<PessoaJuridica> obterTodos() {
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
        pessoas = (List<PessoaJuridica>) ois.readObject();
        ois.close();
    }
}