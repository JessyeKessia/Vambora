export class Carona{

    constructor(public id?: string,
                public motorista?: string,
                public dataSaida?: string,
                public enderecoOrigem?:string,
                public enderecoDestino?:string,
                public valor?: number,
                public vagas?: number,
                public observacoes?: boolean,
                public textoObservacoes?: string,
    ){}
}