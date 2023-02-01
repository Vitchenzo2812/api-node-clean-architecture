import { ValidationCPF } from "./ValidationCPF";

export class User {
    constructor(
        private readonly id: string,
        private readonly name: string,
        private readonly email: string,
        private readonly password: string,
        private readonly cpf: ValidationCPF,
        private readonly phone: string,
        private readonly age: number,
    ) {
        if (this.age < 18) {
            throw new Error('User must be over 18 years old!')
        }
    }
}