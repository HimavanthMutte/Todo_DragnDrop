import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { RxHamburgerMenu } from "react-icons/rx";



const ListItem = ({ data }) =>{
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({id: data.id})
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return(
        <li {...attributes} style={style} ref={setNodeRef} key={data.id} className="flex flex-row gap-3 items-center hover:bg-indigo-500 hover:text-white transition-colors border border-slate-400 shadow-md rounded-md p-5 w-full">
            <RxHamburgerMenu {...listeners} className="cursor-move"/>
            <h1>{data.title}</h1>
        </li>
    )
}

export default ListItem