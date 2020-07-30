export interface Task{
    id: number,
    user: number,
    desk: number,
    descricao: string,
    pendente: boolean,
    ativa: boolean,
    data_criacao: Date
}