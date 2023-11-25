import { Emprestimo } from "./emprestimo";


export class EmprestimoAutomovel extends Emprestimo {
  aprovar(): boolean {
    return this.getSolicitante.getRendaMensal > 3000 && this.getSolicitante.getHabilitado
  }

}