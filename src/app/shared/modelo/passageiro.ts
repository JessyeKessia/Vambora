export class Passageiro {
    constructor(public id?: string,
                public nome?: string,
                public sobrenome?: string,
                public telefone?:string,
                public email?:string,
                public senha?: string,
                public cpf?: string,
    ){}
}

export const PASSAGEIROS: Passageiro[] = [
]