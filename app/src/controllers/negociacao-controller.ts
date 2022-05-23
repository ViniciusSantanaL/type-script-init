import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { MensagensView } from "../views/mensagens-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {

    private inputData: HTMLDataElement;
    private inputValor: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private mensagensView = new MensagensView("#mensagemView");
    private negociacoesService = new NegociacoesService();
    constructor(){
        this.inputData = <HTMLDataElement>document.querySelector('#data');
        this.inputValor = <HTMLInputElement>document.querySelector('#valor');
        this.inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
    }

    @logarTempoDeExecucao()
    public adiciona(): void{
        const negociacao =  Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if(!this.ehDiaUtil(negociacao.getData)){
            this.mensagensView.update("Transferencias só podem ser feitas em Dias Utéis!!" );
            return ;
        }
            
        this.negociacoes.adiciona(negociacao);
        this.atualizaTemplate();
        this.limpaCampos();
    }

    private limpaCampos(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaTemplate(){
        this.negociacoesView.update(this.negociacoes);
        this.mensagensView.update("Negociação Adicionada com Sucesso !!");
    }

    public importaDados(): void {
            this.negociacoesService.
            obterNegociacoesDoDia()
            .then(negociacoesDeHoje => {
                return negociacoesDeHoje.filter(negociacaoDeHoje =>{
                    return !this.negociacoes
                    .lista().some(negociacao => negociacao.equals(negociacaoDeHoje))
                })
            })                
            .then(negociacoesDeHoje => {
                for(let negociacao of negociacoesDeHoje){
                    this.negociacoes.adiciona(negociacao);
                }
            });
        this.atualizaTemplate();
    }

    private ehDiaUtil(date: Date): boolean{
        return date.getDay() > DiasDaSemana.DOMINGO &&
                date.getDay() < DiasDaSemana.SABADO;
    }

}