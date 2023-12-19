interface PropostasBorderadasEmailData {
    filtro: Filtro,
    empresa: Empresa,
    propostas: Proposta[]
}

interface Filtro
{
    tipoProposta: 'nova'|'reposicao',
    diaVencimento?: number
}

interface Empresa 
{
    apelido: string
}

interface Proposta 
{
    nome: string,
    proposta: string,
    digito: number,
    valor: number,
    nomeVendedor: string
}

export { PropostasBorderadasEmailData, Filtro, Empresa, Proposta}