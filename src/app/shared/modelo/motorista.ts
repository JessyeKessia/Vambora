export class Motorista {
    constructor(public id?: string,
                public nome?: string,
                public sobrenome?: string,
                public telefone?:string,
                public email?:string,
                public senha?: string,
                public cnh?: string,
                public placa?: string,
                public modelo?: string,
    ){}
}

export const MOTORISTAS: Motorista[] = [
]