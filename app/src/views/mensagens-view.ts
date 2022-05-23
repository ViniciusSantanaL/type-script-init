import { View } from "./view.js";

export class MensagensView extends View<string>{

    protected template(model: string): string{
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}