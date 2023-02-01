export interface IUpdateUser {
    update: (input: UpdateUserDTO.Input) => Promise<UpdateUserDTO.Output>
}

export namespace UpdateUserDTO {
    export type Input = {
        id: string,
        data: {
            name: string,
            email: string,
            phone: string,
        }
    }

    export type Output = {
        id: string,
        data: {
            name: string,
            email: string,
            phone: string,
        }
    }
}