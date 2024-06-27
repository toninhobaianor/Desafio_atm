import { ValorEntrada,CedulasSaida } from "../model/CaixaModel";

async function CriandoCedulas(Cedulas: CedulasSaida,chave: string,valor: Number) {
    Cedulas.cedulas.set(chave,valor);
}

async function CalcularCedulas(valor: ValorEntrada) {
    let val: number = valor.valor;
    let cedulas: CedulasSaida = {cedulas: new Map<string,Number>};
    var resto : number = 1;
    while(resto != 0){

        if(val >= 100){
            var div = val/100;
            resto = val%100;
            CriandoCedulas(cedulas,"100",div);
            div = resto;
        }
        else if(val < 100 && val >= 80){
            
        }
    }
    return cedulas;
}