"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solicitante = void 0;
class Solicitante {
    constructor(id, nome, idade, rendaMensal, habilitado, matriculado) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.rendaMensal = rendaMensal;
        this.habilitado = habilitado;
        this.matriculado = matriculado;
        this.maiorIdade = () => this.idade >= 18;
    }
    get getNome() {
        return this.nome;
    }
    get getHabilitado() {
        return this.habilitado;
    }
    get getRendaMensal() {
        return this.rendaMensal;
    }
    get getIdade() {
        return this.idade;
    }
    get getMatriculado() {
        return this.matriculado;
    }
}
exports.Solicitante = Solicitante;
