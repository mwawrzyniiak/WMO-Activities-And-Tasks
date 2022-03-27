import { useState } from "react";
import ReactTooltip from "react-tooltip";
import Xarrow from "react-xarrows";
import { Task, TaskDto } from "./Task";

const baseTaskWidth = 50

interface GantProps {
    tasks: TaskDto[]
}

export default function Gantt(props: GantProps) {
    const [processedTasks, setProcessedTasks] = useState<Array<Task>>([]);

    const [chosenTask, setChosenTask] = useState<Task | null>(null)

    if (processedTasks.length == 0) {
        setProcessedTasks(processTasks(props.tasks))
    }

    return (

        <div className="w-full h-full flex flex-row overflow-scroll">
            <div className="w-2/6 pr-6 h-fit bg-white left-0 sticky z-10 border-r-1 shadow-2xl">
                {processedTasks.map(x => <NameRow key={"name_" + x.id} task={x}></NameRow>)}
            </div>
            <div className="w-100 relative h-fit pl-6">
                <div className="absolute h-full w-full overflow-hidden gridBackground">
                    <Arrows task={chosenTask}></Arrows>
                </div>
                {processedTasks.map((x) => <TaskPillRow chosenTask={chosenTask} setChosenTask={setChosenTask} key={"pill_" + x.id} task={x}></TaskPillRow>)}
            </div>
            <ReactTooltip id="test" getContent={(task) => ToolTipContent(JSON.parse(task))} ></ReactTooltip>
        </div>
    );



}

function processTasks(itemsInput: Array<TaskDto>) {
    let itemsRaw: Array<Task> = itemsInput.map(x => { return { ...x, nexts: [], prevs: [], offset: 0 } })

    let starters = itemsRaw.filter(x => x?.predecessors?.length === 0)
    let itemsDict: { [id: number]: Task; } = {};
    //initialize variables
    for (let task of itemsRaw) {
        itemsDict[task.id] = task
        task.duration = 3
    }

    for (let task of itemsRaw) {
        if (task.predecessors?.length > 0) {
            for (let p of task.predecessors) {
                let prev = itemsDict[p]
                if (prev != null) {
                    prev.nexts.push(task)
                    task.prevs.push(prev)
                }
            }
        }
    }

    for (let s of starters) {
        processNexts(s, 0)
    }

    function processNexts(task: Task, offset: number) {
        for (let nextTask of task.nexts) {
            nextTask.offset = Math.max(offset + task.duration, nextTask.offset)
            processNexts(nextTask, nextTask.offset)
        }
    }

    return Object.values(itemsDict)
}

interface RowProps {
    task: Task,
    chosenTask?: Task | null,
    setChosenTask?: (t: Task) => void,
    children?: React.ReactNode,
}
function TaskRow(props: RowProps) {
    return <div className="flex items-center" style={{ height: "40px" }}>
        {props.children}
    </div>
}

function NameRow(props: RowProps) {
    return <TaskRow task={props.task}>
        <div className="flex-1 text-ellipsis overflow-hidden whitespace-nowrap h-100" title={props.task?.name}>
            <span className="font-bold">{props.task?.id}</span>{" " + props.task?.name}
        </div>
    </TaskRow>
}

function TaskPillRow(props: RowProps) {
    let task = props.task
    let width = task.duration * baseTaskWidth + "px"
    let margin = task.offset * baseTaskWidth + "px"

    return <TaskRow task={props.task}>

        <div key={task.id} className="relative">

            <div data-tip={JSON.stringify({ ...task, prevs: [], nexts: [] })} data-for={`test`}
                onClick={() => { props.chosenTask == task ? props.setChosenTask!(null!) : props.setChosenTask!(task) }}
                title={props.task?.name} className={`pill ${props.chosenTask == task ? "bg-blue-500" : "bg-blue-900"}`} id={`box_${task.id}`} style={{
                    marginLeft: margin,
                    width: width,
                    height: "20px"
                }}>
            </div>
        </div>
    </TaskRow>
}

interface ArrowsProps {
    task: Task | null
}
function Arrows(props: ArrowsProps) {
    let task = props.task
    if (task == null) {
        return <div></div>
    }

    let arrows: Array<any> = [];

    for (let next of task.nexts) {
        let key = `|${task.id}_${next.id}|`
        arrows.push(<Arrow key={key} startId={task.id} endId={next.id} iterator={0}></Arrow>)
    }

    for (let prev of task.prevs) {
        let key = `|${prev.id}_${task.id}|`
        arrows.push(<Arrow key={key} startId={prev.id} endId={task.id} iterator={0}></Arrow>)
    }


    return <div>{arrows}</div>
}




interface ArrowProps {
    startId: number
    endId: number
    iterator: number
}
function Arrow(props: ArrowProps) {
    const colors = ["blue", "blue", "orange"]
    const curvenes = [1, .6, .3]

    let start = `box_${props.startId}`
    let end = `box_${props.endId}`

    return <Xarrow
        start={start}
        end={end}
        startAnchor="right"
        endAnchor="top"
        dashness={true}
        color={"blue"}
        strokeWidth={2}
        curveness={1}
        path="smooth" />

}

function ToolTipContent(task: Task) {
    if (task == null) {
        return <div></div>
    }
    return <div>
        <h6>Nazwa</h6>
        <p>{task.name}</p>
        <h6>Faza</h6>
        <p>{task.phase}</p>
        <h6>Dyscyplina</h6>
        <p>{task.discipline}</p>
        <h6>Uzasadnienie</h6>
        <p>{task.description}</p>
    </div>
}



