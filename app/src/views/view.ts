export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(selector: string){
        const elemento = document.querySelector(selector); 
        if(elemento){
            this.elemento = elemento as HTMLElement; 
        }
        
    }

    protected abstract template(model: T): string;

    update(model: T): void{
        this.elemento.innerHTML = this.template(model);
    }

}