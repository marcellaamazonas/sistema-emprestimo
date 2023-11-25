"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicitacaoEmprestimo = void 0;
class SolicitacaoEmprestimo {
    constructor(id) {
        this.id = id;
        this.emprestimos = [];
        this.emprestimosProcessados = [];
    }
    add(emprestimo) {
        this.emprestimos.push(emprestimo);
    }
    processar() {
        for (const emprestimo of this.emprestimos) {
            emprestimo.setStatus = emprestimo.aprovar() ? 'Aprovado' : 'Reprovado';
            this.emprestimosProcessados.push(emprestimo);
        }
    }
    listar() {
        for (const emprestimo of this.emprestimosProcessados) {
            console.log(`- Solicitante: ${emprestimo.getSolicitante.getNome} [${emprestimo.getStatus}]`);
        }
    }
}
exports.SolicitacaoEmprestimo = SolicitacaoEmprestimo;
