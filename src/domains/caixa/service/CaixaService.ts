import { ValorEntrada,CedulasSaida } from "../model/CaixaModel";

async function CriandoCedulas(Cedulas: CedulasSaida,chave: number,valor: number) {
    switch(chave){
        case 1:
            Cedulas.cedulas.set("100",valor);
            break;
        case 2:
            Cedulas.cedulas.set("50",valor);
            break;
        case 3:
            Cedulas.cedulas.set("20",valor);
            break;
        case 4:
            Cedulas.cedulas.set("10",valor);
            break;
        case 5:
            Cedulas.cedulas.set("5",valor);
            break;
        case 6:
            Cedulas.cedulas.set("2",valor);
            break;
        default:
            break;
    }
}

export async function CalcularCedulas(valor: ValorEntrada) {
    let val: number = valor.valor;
    let cedulas: CedulasSaida = {cedulas: new Map<string,Number>};
    var resto : number = 1;
    var div : number = 0;
    const numbers = [100, 50, 20, 10, 5, 2];
    while(div != 1){

    }
    var i = 0;
    return cedulas;
}

