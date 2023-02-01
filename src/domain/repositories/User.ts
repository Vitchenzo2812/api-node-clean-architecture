import { User } from "../entities/User";

export interface GetUserRepository {
    get: (query: Partial<User>) => Promise<User[]>
}

export interface GetByIdRepository {
    getById: (id: string) => Promise<User>
}

export interface SaveUserRepository {
    save: (user: User) => Promise<User>
}

export interface UpdateUserRepository {
    update: (id: string, data: User) => Promise<User>
}

export interface DeleteUserRepository {
    delete: (id: string) => Promise<void>
}