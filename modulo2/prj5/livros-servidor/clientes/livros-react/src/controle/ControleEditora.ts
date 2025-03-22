import { Editora } from "../modelo/Editora";

export class ControleEditora {
  editoras: Array<Editora> = [
    new Editora(1, "Alta Books"),
    new Editora(2, "Pearson"),
    new Editora(3, "Addison Wesley")
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.find(ed => ed.codEditora === codEditora);
    return editora?.nome;
  }
}