export interface IDeleteUser {
    delete: (id: string) => Promise<void>
}