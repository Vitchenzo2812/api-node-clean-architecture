import { ApplicationError } from "../../domain/entities/Error";

export interface Validation {
    validate: (input: any) => ApplicationError | void
}