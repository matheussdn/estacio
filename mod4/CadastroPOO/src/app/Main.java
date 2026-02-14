package app;

import model.*;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        PessoaFisicaRepo repoFisica = new PessoaFisicaRepo();
        PessoaJuridicaRepo repoJuridica = new PessoaJuridicaRepo();

        int opcao;

        do {
            System.out.println("\n=======================================================");
            System.out.println("1 - Incluir Pessoa");
            System.out.println("2 - Alterar Pessoa");
            System.out.println("3 - Excluir Pessoa");
            System.out.println("4 - Buscar Pelo Id");
            System.out.println("5 - Exibir Todos");
            System.out.println("6 - Persistir Dados");
            System.out.println("7 - Recuperar Dados");
            System.out.println("0 - Finalizar Programa");
            System.out.println("=======================================================");
            System.out.print("\nOpção: ");

            opcao = sc.nextInt();
            sc.nextLine(); // limpa buffer

            switch (opcao) {

                case 1 -> { // INCLUIR
                    System.out.println("F - Pessoa Física  |  J - Pessoa Juridica");
                    String tipo = sc.nextLine().toUpperCase();

                    System.out.print("Digite o id da pessoa:\n");
                    int id = sc.nextInt();
                    sc.nextLine();

                    System.out.println("insira os dados...");
                    System.out.print("Nome: ");
                    String nome = sc.nextLine();

                    if (tipo.equals("F")) {
                        System.out.print("CPF: ");
                        String cpf = sc.nextLine();

                        System.out.print("Idade: ");
                        int idade = sc.nextInt();
                        sc.nextLine();

                        repoFisica.inserir(
                                new PessoaFisica(id, nome, cpf, idade)
                        );

                    } else if (tipo.equals("J")) {
                        System.out.print("CNPJ: ");
                        String cnpj = sc.nextLine();

                        repoJuridica.inserir(
                                new PessoaJuridica(id, nome, cnpj)
                        );
                    }
                }

                case 2 -> { // ALTERAR
                    System.out.println("F - Pessoa Física  |  J - Pessoa Juridica");
                    String tipo = sc.nextLine().toUpperCase();

                    System.out.print("Digite o id da pessoa:\n");
                    int id = sc.nextInt();
                    sc.nextLine();

                    if (tipo.equals("F")) {
                        PessoaFisica pf = repoFisica.obter(id);
                        if (pf != null) {
                            pf.exibir();
                            System.out.println("Novos dados...");
                            System.out.print("Nome: ");
                            pf.setNome(sc.nextLine());
                            System.out.print("CPF: ");
                            pf.setCpf(sc.nextLine());
                            System.out.print("Idade: ");
                            pf.setIdade(sc.nextInt());
                            sc.nextLine();
                            repoFisica.alterar(pf);
                        } else {
                            System.out.println("Pessoa não encontrada.");
                        }

                    } else if (tipo.equals("J")) {
                        PessoaJuridica pj = repoJuridica.obter(id);
                        if (pj != null) {
                            pj.exibir();
                            System.out.println("Novos dados...");
                            System.out.print("Nome: ");
                            pj.setNome(sc.nextLine());
                            System.out.print("CNPJ: ");
                            pj.setCnpj(sc.nextLine());
                            repoJuridica.alterar(pj);
                        } else {
                            System.out.println("Pessoa não encontrada.");
                        }
                    }
                }

                case 3 -> { // EXCLUIR
                    System.out.println("F - Pessoa Física  |  J - Pessoa Juridica");
                    String tipo = sc.nextLine().toUpperCase();

                    System.out.print("Digite o id da pessoa:\n");
                    int id = sc.nextInt();
                    sc.nextLine();

                    if (tipo.equals("F")) {
                        repoFisica.excluir(id);
                    } else if (tipo.equals("J")) {
                        repoJuridica.excluir(id);
                    }
                }

                case 4 -> { // BUSCAR ID
                    System.out.println("F - Pessoa Física  |  J - Pessoa Juridica");
                    String tipo = sc.nextLine().toUpperCase();

                    System.out.print("Digite o id da pessoa:\n");
                    int id = sc.nextInt();
                    sc.nextLine();

                    if (tipo.equals("F")) {
                        PessoaFisica pf = repoFisica.obter(id);
                        if (pf != null) pf.exibir();
                        else System.out.println("Pessoa não encontrada.");

                    } else if (tipo.equals("J")) {
                        PessoaJuridica pj = repoJuridica.obter(id);
                        if (pj != null) pj.exibir();
                        else System.out.println("Pessoa não encontrada.");
                    }
                }

                case 5 -> { // EXIBIR TODOS
                    System.out.println("F - Pessoa Física  |  J - Pessoa Juridica");
                    String tipo = sc.nextLine().toUpperCase();

                    if (tipo.equals("F")) {
                        for (PessoaFisica pf : repoFisica.obterTodos()) {
                            pf.exibir();
                        }
                    } else if (tipo.equals("J")) {
                        for (PessoaJuridica pj : repoJuridica.obterTodos()) {
                            pj.exibir();
                        }
                    }
                }

                case 6 -> { // PERSISTIR
                    try {
                        System.out.print("Prefixo do arquivo: ");
                        String prefixo = sc.nextLine();

                        repoFisica.persistir(prefixo + ".fisica.bin");
                        repoJuridica.persistir(prefixo + ".juridica.bin");

                        System.out.println("Dados persistidos com sucesso.");

                    } catch (Exception e) {
                        System.out.println("Erro ao salvar dados.");
                    }
                }

                case 7 -> { // RECUPERAR
                    try {
                        System.out.print("Prefixo do arquivo: ");
                        String prefixo = sc.nextLine();

                        repoFisica.recuperar(prefixo + ".fisica.bin");
                        repoJuridica.recuperar(prefixo + ".juridica.bin");

                        System.out.println("Dados recuperados com sucesso.");

                    } catch (Exception e) {
                        System.out.println("Erro ao recuperar dados.");
                    }
                }

                case 0 -> System.out.println("Finalizando programa...");

                default -> System.out.println("Opção inválida.");
            }

        } while (opcao != 0);

        sc.close();
    }
}