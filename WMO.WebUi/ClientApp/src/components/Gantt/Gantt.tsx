import axios from "axios";
import { useState } from "react";
import Xarrow from "react-xarrows";
import { Task } from "./Task";

const baseTaskWidth = 80

export default function Gantt() {
    return <h1>gantt</h1>
    //let itemsRaw: Task[] = ExampleData();
    let tmp: Task[] = []
    const [itemsRaw, setItemsRaw] = useState(tmp);

    axios.get(`http://localhost:4000/api/v1/schedule`)
        .then(res => {
            setItemsRaw(res.data)
        })

    let starters = itemsRaw.filter(x => x.Predecessors.length == 0)
    let itemsDict: { [id: number]: Task; } = {};
    var offsets: { [id: number]: number; } = {};
    var nexts: { [id: number]: Array<number>; } = {};

    //initialize variables
    for (let task of itemsRaw) {
        itemsDict[task.Id] = task
        offsets[task.Id] = 0
        nexts[task.Id] = []
        task.Duration = 3
    }

    for (let task of itemsRaw) {
        if (task.Predecessors?.length > 0) {
            for (let p of task.Predecessors) {
                nexts[p].push(task.Id);
            }
        }
    }

    for (let s of starters) {
        processNexts(s, 0)
    }

    function processNexts(task: Task, offset: number) {
        for (let i of nexts[task.Id]) {
            var nextTask = itemsDict[i]
            offsets[nextTask.Id] = Math.max(offset + task.Duration, offsets[nextTask.Id])
            processNexts(nextTask, offsets[nextTask.Id])
        }
    }

    let items = Object.values(itemsDict)

    return (

        <div className="w-full h-full flex flex-row overflow-scroll">
            <div className="w-2/6 pr-6 h-fit bg-white left-0 sticky z-10 border-r-1 shadow-2xl">
                {items.map(x => <NameRow key={"name_" + x.Id} task={x}></NameRow>)}
            </div>
            <div className="w-fit relative h-fit pl-6">
                <div className="absolute h-full w-full overflow-hidden gridBackground">
                    <Arrows></Arrows>
                </div>
                {items.map((x) => <TaskPillRow key={"pill_" + x.Id} task={x}></TaskPillRow>)}
            </div>
        </div>
    );


    interface RowProps {
        task: Task,
        children?: React.ReactNode
    }
    function TaskRow(props: RowProps) {
        return <div className="flex items-center py-8" style={{ height: "30px" }}>
            {props.children}
        </div>
    }

    function NameRow(props: RowProps) {
        return <TaskRow task={props.task}>
            <div className="flex-1 border-b-2 pb-5 text-ellipsis overflow-hidden whitespace-nowrap" title={props.task?.Name}>
                {props.task?.Id + " " + props.task?.Name}
            </div>
        </TaskRow>
    }

    function TaskPillRow(props: RowProps) {
        let task = props.task
        let width = task.Duration * baseTaskWidth + "px"
        let margin = offsets[task.Id] * baseTaskWidth + "px"

        return <TaskRow task={props.task}>

            <div key={task.Id} className="relative" style={{
                // backgroundImage: "linear-gradient(rgba(0, 255, 0, .7) .1em, transparent .1em), linear-gradient(90deg, rgba(0, 255, 0, .7) .1em, transparent .1em)"
            }}>

                <div title={props.task?.Name} className="pill bg-blue-500" id={`box_${task.Id}`} style={{
                    marginLeft: margin,
                    width: width,
                    height: "20px"
                }}>
                </div>

            </div>
        </TaskRow>
    }

    function Arrows() {
        let arrows: Array<any> = [];
        function traverseTask(task: Task, arrows: Array<any>) {
            let colors = ["blue", "blue", "orange"]
            let curvenes = [1, .6, .3]

            let it = 0;
            for (let i of nexts[task.Id]) {
                var nextTask = itemsDict[i]

                let start = `box_${task.Id}`
                let end = `box_${i}`
                arrows.push(<Xarrow
                    key={i + "_" + task.Id}
                    start={start}
                    end={end}
                    startAnchor="right"
                    endAnchor="top"
                    dashness={true}
                    color={colors[it % nexts[task.Id].length]}
                    strokeWidth={2}
                    curveness={curvenes[it % nexts[task.Id].length]}
                    path="smooth" />);

                it++;
                traverseTask(nextTask, arrows)
            }
        }

        for (let s of starters) {
            traverseTask(s, arrows)
        }

        return <div>{arrows}</div>

    }
}



