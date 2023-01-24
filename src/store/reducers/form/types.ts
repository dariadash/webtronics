export type InitialStateType = {
    data: User,
    error: null,
    loading: boolean,
    status: string,
}

export type User = {
    id: number | undefined,
    name: string,
    phone: string,
    email: string,
}

export enum RequestStatus {
    Succeeded = 'succeeded',
    Loading = 'loading',
    Failed = 'failed'
}