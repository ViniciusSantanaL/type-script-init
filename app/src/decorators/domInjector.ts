export function domInjector(selector: string) {
    
    return function(target: any, propertyKey: string){
        console.log(`teste no atributo ${propertyKey}`);
        

        const getter = function() {
            console.log(`sfgsdgSAGS no atributo ${propertyKey}`);
            const elemento  = document.querySelector(selector);
            
            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        );
    }
}