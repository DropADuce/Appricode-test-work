export interface ITasks {
    id: string;
    description: string;
    completed: boolean
}
export type AddTaskType = (task: ITasks) => void
export type DeleteTaskType = (id: string) => void
export type SetCompleteType = (id: string) => void

export enum FilterTypes {
    ALL = 'ALL',
    COMPLETED = 'COMPLETED',
    UNCOMPLETED = 'UNCOMPLETED'
}


