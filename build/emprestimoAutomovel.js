"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoAutomovel = void 0;
const emprestimo_1 = require("./emprestimo");
class EmprestimoAutomovel extends emprestimo_1.Emprestimo {
    aprovar() {
        return this.getSolicitante.getRendaMensal > 3000 && this.getSolicitante.getHabilitado;
    }
}
exports.EmprestimoAutomovel = EmprestimoAutomovel;
