import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoesDoDia() {
        return fetch("http://localhost:8080/dados")
            .then(res => res.json())
            .then((negociacoesDoDia) => {
            return negociacoesDoDia.map(negociacoesDoDia => {
                return new Negociacao(new Date(), negociacoesDoDia.vezes, negociacoesDoDia.montante);
            });
        });
    }
}
