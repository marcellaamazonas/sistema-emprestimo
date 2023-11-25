import { Emprestimo } from "./emprestimo"

export class SolicitacaoEmprestimo {
  private emprestimos: Emprestimo[] = []
  private emprestimosProcessados: Emprestimo[] = []
  
  constructor(
    private id: number,
  ) {}

  add(emprestimo: Emprestimo): void {
    this.emprestimos.push(emprestimo)
  }
    
  processar() {
    for (const emprestimo of this.emprestimos){
      emprestimo.setStatus = emprestimo.aprovar() ? 'Aprovado' : 'Reprovado'
      this.emprestimosProcessados.push(emprestimo)
    }
  }

  listar() {
    for (const emprestimo of this.emprestimosProcessados) {
      console.log(`- Solicitante: ${emprestimo.getSolicitante.getNome} [${emprestimo.getStatus}]`)
    }
  }
  
}
