export type InitialStateType = {
    data: User,
    error: null,
    loading: boolean,
}

export type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
}