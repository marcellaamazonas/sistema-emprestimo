import { Emprestimo} from "./emprestimo";

export class EmprestimoPessoal extends Emprestimo {
  aprovar(): boolean {
    return this.getSolicitante.getRendaMensal > 2500
  }
 
}