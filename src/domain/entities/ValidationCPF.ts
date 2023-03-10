export class ValidationCPF {
    private cpfClear: string;
    private newCpf: string;

    constructor(cpf: string) {
        this.cpfClear = cpf.replace('/\D+/g', '')
        this.newCpf = '';
    }

    isSequence() {
        return this.cpfClear.charAt(0).repeat(this.cpfClear.length) === this.cpfClear;
    }

    generatorNewCpf() {
        const cpfWithoutDigits = this.cpfClear.slice(0, -2);
        const firstDigit = ValidationCPF.generatorDigit(cpfWithoutDigits);
        const secondDigit = ValidationCPF.generatorDigit(cpfWithoutDigits + firstDigit);

        this.newCpf = cpfWithoutDigits + firstDigit + secondDigit
    }

    static generatorDigit(abstractCpf: string) {
        let total = 0;
        let regressive = (abstractCpf.length + 1);

        for (let cpfArray of abstractCpf) {
            total += regressive * Number(cpfArray);
            regressive--;
        }

        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : '0';
    }

    validation() {
        if (!this.cpfClear) return false;
        if (typeof this.cpfClear !== 'string') return false;
        if (this.cpfClear.length !== 11) return false;
        if (this.isSequence()) return false;
        this.generatorNewCpf();

        return this.newCpf === this.cpfClear;
    }
}   