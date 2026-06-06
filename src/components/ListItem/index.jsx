import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { RxHamburgerMenu } from "react-icons/rx";
import { useDndContext } from "@dnd-kit/core";


const ListItem = ({ data }) =>{
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({id: data.id})
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    const { active } = useDndContext();

    const isActive = active?.id === data.id;

    return(
        <li style={{ position: "relative","z-index": isActive ? 999 : 0, ...style }} ref={setNodeRef} key={data.id} className={`flex flex-row gap-3 transition-colors items-center border border-slate-400 shadow-md rounded-md p-5 w-full ${isActive ? "bg-indigo-500 text-white" : "bg-white"}`}>
            <div {...attributes} {...listeners} style={{ "cursor": isActive ? "grabbing" : "grab" }}>
                <RxHamburgerMenu/>
            </div>
            <h1>{data.title}</h1>
        </li>
    )
}

export default ListItem