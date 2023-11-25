import { Solicitante } from "./solicitante";

export abstract class Emprestimo {
  static taxaDeJuros: number = 0.01;
  private status: string

  constructor(
    private id: number,
    private valorRequerido: number,
    private numeroParcelas: number,
    private solicitante: Solicitante
  ){}

  get getSolicitante(): Solicitante {
    return this.solicitante;
  }

  set setStatus(status: string) {
    this.status = status;
  }

  get getStatus(): string {
    return this.status;
  }

  abstract aprovar(): boolean

  calcularValorParcela(): number {
    return this.valorRequerido * Emprestimo.taxaDeJuros / 1 - (1 + Emprestimo.taxaDeJuros)**this.numeroParcelas
  }

  calcularValorEmprestimo(): number {
    return this.calcularValorParcela() * this.numeroParcelas
  }
}