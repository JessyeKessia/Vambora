export class Carona {
    constructor(public id?: string,
                public motorista?: string,
                public dataSaida?: string,
                public enderecoPartida?:string,
                public enderecoChegada?:string,
                public valor?: number,
                public vagas?: number,
                public observacoes: boolean = false,
                public textoObservacoes?: string,
                public isEditing: boolean = false  
    ){}
}

export interface CaronaResponse {
    "id": number,
    "motoristaNome": string,
    "motoristaEmail": string,
    "dataDeSaida": string,
    "enderecoDePartida": string,
    "enderecoDeChegada": string,
    "valor": number,
    "vagas": number,
    "observacoes": string,
    "finalizada": boolean
}

export const CARONAS: Carona[] = [
]