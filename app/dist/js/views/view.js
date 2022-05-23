export class View {
    elemento;
    constructor(selector) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = elemento;
        }
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
