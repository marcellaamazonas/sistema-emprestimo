import { SolicitacaoEmprestimo } from "./solicitacaoEmprestimo";
import { Emprestimo } from "./emprestimo";
import { Solicitante } from "./solicitante";
import { EmprestimoAutomovel } from "./emprestimoAutomovel";
import { EmprestimoEstudantil } from "./emprestimoEstudantil";
import { EmprestimoPessoal } from "./emprestimoPessoal";

const solicitante1 = new Solicitante(1, "Marcella", 30, 2000, true, true)
const solicitante2 = new Solicitante(2, "Victor", 33, 4000, true, true)
const solicitante3 = new Solicitante(3, "Maria", 89, 700, true, true)

const solicitacoes = new SolicitacaoEmprestimo(1)

solicitacoes.add(new EmprestimoPessoal(1, 10000, 10, solicitante1))
solicitacoes.add(new EmprestimoAutomovel(2, 1000, 9, solicitante2))
solicitacoes.add(new EmprestimoEstudantil(3, 7800, 11, solicitante3))

solicitacoes.processar()
solicitacoes.listar()



