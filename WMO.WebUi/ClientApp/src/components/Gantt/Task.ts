export interface Task{
    Id: number,
    Name: string,
    Duration: number,
    Role: string,
    Predecessors: Array<number>
}