export class Negociacao {
    data;
    quantidade;
    valor;
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get getData() {
        const data = new Date(this.data.getTime());
        return data;
    }
    get getQuantidade() {
        return this.quantidade;
    }
    get getValor() {
        return this.valor;
    }
    static criaDe(dateS, quantidadeS, valorS) {
        const date = new Date(dateS);
        const valor = parseInt(quantidadeS);
        const quantidade = parseInt(valorS);
        return new Negociacao(date, quantidade, valor);
    }
    toString() {
        return `Data: ${this.data}
                Quantidade: ${this.quantidade}
                Valor: ${this.valor}`;
    }
    equals(object) {
        return this.data.getDay == object.data.getDay
            && this.data.getMonth == object.data.getMonth
            && this.data.getFullYear == object.data.getFullYear;
    }
}
