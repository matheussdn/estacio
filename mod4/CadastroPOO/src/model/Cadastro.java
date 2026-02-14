package model;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Cadastro {

    private List<Pessoa> pessoas = new ArrayList<>();
    private final String arquivo = "pessoas.dat";

    public void adicionar(Pessoa p) {
        pessoas.add(p);
    }

    public void listar() {
        if (pessoas.isEmpty()) {
            System.out.println("Nenhuma pessoa cadastrada.");
            return;
        }

        for (Pessoa p : pessoas) {
            System.out.println("--------------------");
            p.exibir();
        }
    }

    public void salvar() {
        try (ObjectOutputStream oos =
                     new ObjectOutputStream(new FileOutputStream(arquivo))) {

            oos.writeObject(pessoas);
            System.out.println("Dados salvos com sucesso!");

        } catch (IOException e) {
            System.out.println("Erro ao salvar arquivo: " + e.getMessage());
        }
    }

    @SuppressWarnings("unchecked")
    public void carregar() {
        try (ObjectInputStream ois =
                     new ObjectInputStream(new FileInputStream(arquivo))) {

            pessoas = (List<Pessoa>) ois.readObject();
            System.out.println("Dados carregados com sucesso!");

        } catch (FileNotFoundException e) {
            System.out.println("Arquivo ainda não existe. Será criado ao salvar.");
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Erro ao carregar arquivo: " + e.getMessage());
        }
    }
}