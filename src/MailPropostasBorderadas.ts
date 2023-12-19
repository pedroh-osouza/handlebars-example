import * as Handlebars from 'handlebars';
import { Empresa, Filtro, Proposta, PropostasBorderadasEmailData } from "./types";
import { readFileSync } from "fs";

class MailPropostasBorderadas
{
    private view = 'C:\\Users\\pedro\\OneDrive\\Área de Trabalho\\pasta\\src\\resources\\views\\email\\emailPropostasBorderadas.html';

    constructor(public propostas: Proposta[], public filtro: Filtro, public empresa: Empresa){}

    private getHtmlBase(): string
    {
        return readFileSync(this.view, { encoding: 'utf8' }).toString();
    }

    public getHtmlString() 
    {
        const template = Handlebars.compile<PropostasBorderadasEmailData>(this.getHtmlBase());
        const emailData: PropostasBorderadasEmailData = {
            empresa: this.empresa,
            filtro: this.filtro,
            propostas: this.propostas
        };
        return template(emailData);
    }
}

export { MailPropostasBorderadas }