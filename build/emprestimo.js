"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprestimo = void 0;
class Emprestimo {
    constructor(id, valorRequerido, numeroParcelas, solicitante) {
        this.id = id;
        this.valorRequerido = valorRequerido;
        this.numeroParcelas = numeroParcelas;
        this.solicitante = solicitante;
    }
    get getSolicitante() {
        return this.solicitante;
    }
    set setStatus(status) {
        this.status = status;
    }
    get getStatus() {
        return this.status;
    }
    calcularValorParcela() {
        return this.valorRequerido * Emprestimo.taxaDeJuros / 1 - (1 + Emprestimo.taxaDeJuros) ** this.numeroParcelas;
    }
    calcularValorEmprestimo() {
        return this.calcularValorParcela() * this.numeroParcelas;
    }
}
exports.Emprestimo = Emprestimo;
Emprestimo.taxaDeJuros = 0.01;
