"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoEstudantil = void 0;
const emprestimo_1 = require("./emprestimo");
class EmprestimoEstudantil extends emprestimo_1.Emprestimo {
    aprovar() {
        return this.getSolicitante.getRendaMensal > 1500 && this.getSolicitante.getMatriculado && this.getSolicitante.maiorIdade() && this.getSolicitante.getIdade <= 30;
    }
}
exports.EmprestimoEstudantil = EmprestimoEstudantil;
