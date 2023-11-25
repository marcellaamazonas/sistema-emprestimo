
export class Solicitante {

  constructor(
    private id: number,
    private nome: string,
    private idade: number,
    private rendaMensal: number,
    private habilitado: boolean,
    private matriculado: boolean
  ) { }

  get getNome(): string {
    return this.nome;
  }

  get getHabilitado(): boolean {
    return this.habilitado;
  }

  get getRendaMensal(): number {
    return this.rendaMensal;
  }

  get getIdade(): number {
    return this.idade;
  }

  get getMatriculado(): boolean {
    return this.matriculado;
  }
  
  maiorIdade = () => this.idade >= 18
}



