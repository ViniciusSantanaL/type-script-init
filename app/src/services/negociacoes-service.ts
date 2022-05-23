import { NegociacoesDoDia } from "../interfaces/negociacoes-do-dia";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {


    public obterNegociacoesDoDia(): Promise<Negociacao[]> {

       return fetch("http://localhost:8080/dados")
        .then(res => res.json())
        .then((negociacoesDoDia: Array<NegociacoesDoDia>) => {
            return negociacoesDoDia.map(negociacoesDoDia => {
                return new Negociacao(new Date(),negociacoesDoDia.vezes, negociacoesDoDia.montante);
            })
        });

    }
}