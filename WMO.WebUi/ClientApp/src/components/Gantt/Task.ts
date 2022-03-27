export interface TaskDto{
    id: number,
    name: string,
    duration: number,
    role: string,
    predecessors: Array<number>
    description?: string
    discipline: string
    phase: string
}


export interface Task{
    id: number,
    name: string,
    duration: number,
    role: string,
    predecessors: Array<number>
    description?: string
    discipline: string
    phase: string
    nexts: Array<Task>,
    prevs: Array<Task>
    offset: number
}

