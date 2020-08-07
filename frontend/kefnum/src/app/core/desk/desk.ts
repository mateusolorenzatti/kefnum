import { Task } from '../task/task';

export interface Desk {
    id: number,
    user: number,
    nome: string,
    cor: string,
    tasks: Task[]
}