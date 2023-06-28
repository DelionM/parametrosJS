const saludo = (nombre = 'persona') => {
    console.log( `Hola Mundo ${nombre}` );
};

saludo('Giovanni');
saludo('Brayan');
saludo('Delion');
saludo();

const operacion = (tipo, numero1, numero2) =>{
    if( tipo ==='suma'){
        console.log('el resulatdo de la suma es: ', numero1 + numero2);
    }
    else if (tipo === 'resta') {
        console.log('el resulatdo de la resta es: ', numero1 - numero2);
    }
    else if (tipo === 'multiplicacion') {
        console.log('el resulatdo de la multiplicacion es: ', numero1 * numero2);
    }
}
operacion('suma', 1, 5);
operacion('resta', 5, 4);
operacion('multiplicacion', 1, 5);