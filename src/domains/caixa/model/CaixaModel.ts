
type ValorEntrada  = {
    valor: number
}

interface CedulasSaida {
    cedulas: Map<string,Number>;
}

interface Caixa {
    val: number
    dinheiro: Map<string,Number>;
}

export {ValorEntrada, CedulasSaida, Caixa}