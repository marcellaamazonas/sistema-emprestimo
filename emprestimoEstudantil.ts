import { Emprestimo } from "./emprestimo";

export class EmprestimoEstudantil extends Emprestimo {
  aprovar(): boolean {
    return this.getSolicitante.getRendaMensal > 1500 && this.getSolicitante.getMatriculado && this.getSolicitante.maiorIdade() && this.getSolicitante.getIdade <= 30
  }
}