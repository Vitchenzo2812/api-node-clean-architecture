export interface IAddUser {
    add: (input: AddUserDTO.Input) => Promise<AddUserDTO.Output>
}

export namespace AddUserDTO {
    export type Input = {
        name: string,
        email: string,
        age: number,
        phone: string,
        cpf: string
    }

    export type Output = {
        name: string,
        email: string,
        age: number,
        phone: string,
        cpf: string
    }
}