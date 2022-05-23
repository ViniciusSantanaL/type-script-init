import { Modelo } from "../interfaces/modelo";

export class Negociacao implements Modelo<Negociacao>{

    private  data : Date; 
    private quantidade: number;
    private valor: number;

    constructor(data: Date,quantidade: number,valor: number){
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
 
    get getData(): Date{
       const data = new Date(this.data.getTime());
       return data;
    }

    get getQuantidade(): number{
        return this.quantidade
    }

    get getValor(): number{
        return this.valor
    }

    public static criaDe(dateS: string, quantidadeS: string, valorS: string): Negociacao{
        const date = new Date(dateS);
        const valor = parseInt(quantidadeS);
        const quantidade = parseInt(valorS);
        return new Negociacao(date,quantidade,valor);
    }

    toString(): string {
        return `Data: ${this.data}
                Quantidade: ${this.quantidade}
                Valor: ${this.valor}`;
    }
    equals(object: Negociacao): boolean {
        return this.data.getDay == object.data.getDay
            && this.data.getMonth == object.data.getMonth
            && this.data.getFullYear == object.data.getFullYear;
    }
}