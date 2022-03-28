import { useState } from "react";
import ReactTooltip from "react-tooltip";
import Xarrow from "react-xarrows";
import { Task, TaskDto } from "./Task";

const baseTaskWidth = 50
interface GantProps {
    tasks: TaskDto[]
}

interface Depth {
    [phase: string]: number;
}

export default function Gantt(props: GantProps) {
    const [processedTasks, setProcessedTasks] = useState<Array<Task>>([]);
    const [chosenTask, setChosenTask] = useState<Task | null>(null)
    const [depths, setDepths] = useState<Depth>({})

    if (processedTasks.length == 0) {
        setProcessedTasks(processTasks(props.tasks, depths, setDepths))
    }

    return (

        <div className="w-full h-full flex flex-row overflow-scroll">
            <div className="w-2/6 pr-6 h-fit bg-white left-0 sticky z-50 border-r-1 shadow-2xl pt-6">
                {processedTasks.map(x => <NameRow key={"name_" + x.id} task={x}></NameRow>)}
            </div>
            <div className="w-100 relative h-fit pl-6 pt-6">
                {processedTasks.map((x) => <TaskPillRow chosenTask={chosenTask} setChosenTask={setChosenTask} key={"pill_" + x.id} task={x}></TaskPillRow>)}

                <div className="absolute top-6 h-full w-full overflow-hidden gridBackground" style={{ zIndex: 2 }}>
                    <Arrows task={chosenTask}></Arrows>
                </div>
                <div className="absolute top-0 left-0 h-100 pl-6 d-flex text-center" style={{ zIndex: -1 }}>
                    <h6 style={{ width: depths["Inception"] * baseTaskWidth + "px" }} className="pt-1">Inception</h6>
                    <h6 style={{ width: depths["Elaboration"] * baseTaskWidth + "px" }} className="bg-blue-100 pt-1">Elaboration</h6>
                    <h6 style={{ width: depths["Construction"] * baseTaskWidth + "px" }} className="pt-1">Construction</h6>
                    <h6 style={{ width: depths["Transition"] * baseTaskWidth + "px" }} className="bg-blue-100 pt-1">Transition</h6>
                </div>
            </div>
            <ReactTooltip id="test" getContent={(task) => ToolTipContent(JSON.parse(task))} ></ReactTooltip>
        </div>
    );



}

function processTasks(itemsInput: Array<TaskDto>, depths: any, setDepths: any) {
    let itemsRaw: Array<Task> = itemsInput.map(x => { return { ...x, nexts: [], prevs: [], offset: 0 } })

    let itemsDict: { [id: number]: Task; } = {};
    //initialize variables
    for (let task of itemsRaw) {
        itemsDict[task.id] = task
        task.duration = 1
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

    let starters = itemsRaw.filter(x => x?.prevs?.length === 0)
    let tempDepths: any = {...depths}
    for (let s of starters) {
        tempDepths[s.phase] = tempDepths[s.phase] ?? 0;
        s.offset = getOffset(s)
        tempDepths[s.phase] = Math.max(processNexts(s), tempDepths[s.phase])
    }

    setDepths(tempDepths)

    function processNexts(task: Task) {
        let maxDepth = 1;
        for (let nextTask of task.nexts) {
            nextTask.offset = Math.max(task.offset + task.duration, nextTask.offset)
            maxDepth = Math.max(maxDepth, processNexts(nextTask) + 1)
        }
        return maxDepth;
    }

    function getOffset(task: Task){
        switch (task.phase) {
            case "Inception":
                return 0
            case "Elaboration":
                return tempDepths["Inception"]
            case "Construction":
                return tempDepths["Elaboration"] + tempDepths["Inception"]
            case "Transition":
                return tempDepths["Construction"] + tempDepths["Elaboration"] + tempDepths["Inception"]
        }
    }

    return Object.values(itemsDict)
}


function getPillColor(task: Task) {
    switch (task.phase) {
        case "Inception":
            return "orange"
        case "Elaboration":
            return "green"
        case "Construction":
            return "black"
        case "Transition":
            return "red"
    }
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

        <div key={task.id} className="relative" style={{ zIndex: 20 }}>

            <div data-tip={JSON.stringify({ ...task, prevs: [], nexts: [] })} data-for={`test`}
                onClick={() => { props.chosenTask == task ? props.setChosenTask!(null!) : props.setChosenTask!(task) }}
                title={props.task?.name} className={`pill ${props.chosenTask == task ? "bg-blue-500" : ""}`} id={`box_${task.id}`} style={{
                    marginLeft: margin,
                    width: width,
                    height: "20px",
                    backgroundColor: getPillColor(task)
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
        <h6>Poprzednicy</h6>
        <ul>
            {task.prevs.map(x => <li>{x.name}</li>)}
        </ul>
        {task.predecessors.map(x => x + "___")}
        <h6>
            Offset
        </h6>
        {task.offset}
    </div>
}



