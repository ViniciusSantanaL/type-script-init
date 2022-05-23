export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`teste no atributo ${propertyKey}`);
        const getter = function () {
            console.log(`sfgsdgSAGS no atributo ${propertyKey}`);
            const elemento = document.querySelector(selector);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
