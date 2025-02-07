export class Carona{

    constructor(public id?: string,
                public motorista?: string,
                public dataSaida?: string,
                public enderecoPartida?:string,
                public enderecoChegada?:string,
                public valor?: number,
                public vagas?: number,
                public observacoes: boolean = false,
                public textoObservacoes?: string,
    ){}
}