import { MailPropostasBorderadas } from './MailPropostasBorderadas';
import { Empresa, Filtro, Proposta } from './types';

const propostas: Proposta[] = [
    {
        nome: 'Pedro',
        digito: 1,
        nomeVendedor: 'Teste',
        proposta: '1',
        valor: 250
    }
]

const filtro: Filtro = {
    tipoProposta: 'nova'
}

const empresa: Empresa = {
    apelido: 'AF'
}

const mail = new MailPropostasBorderadas(propostas, filtro, empresa)
console.log(mail.getHtmlString());