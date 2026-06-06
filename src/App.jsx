import ListItem  from "./components/ListItem"

import { SortableContext , arrayMove } from "@dnd-kit/sortable"

import { DndContext, closestCorners , useSensor , useSensors , MouseSensor , KeyboardSensor , TouchSensor } from "@dnd-kit/core"
import { sortableKeyboardCoordinates, rectSortingStrategy } from "@dnd-kit/sortable"

import { useState } from "react"

const items = [
  {id:1, title:"Wash Clothes"},
  {id:2, title:"Play Games"},
  {id:3, title:"Eat Food"},
  {id:4, title:"Go to Gym"},
]

const App = () =>{

  const [listItems,setItems] = useState(items)

  const handleDragEnd = (event) =>{
    const oldIndex = listItems.findIndex(item=>item.id===event.active.id)
    const newIndex = listItems.findIndex(item=>item.id===event.over?.id)
    setItems(prev=>arrayMove(listItems,oldIndex,newIndex))
  }

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(KeyboardSensor,{
      coordinateGetter: sortableKeyboardCoordinates
    }),
    useSensor(TouchSensor,{
      activationConstraint:{
        delay:100,
        tolerance:5
      }
    })
  )

  return (
    <div className="min-h-screen bg-indigo-500 p-5">
      <h1 className="text-white text-center text-3xl font-bold">To Do List</h1>
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd} sensors={sensors}>
        <SortableContext items={listItems} strategy={rectSortingStrategy}>
          <ul className="flex flex-col gap-5 bg-white p-5 mt-5 rounded-md max-w-[700px] m-auto shadow-xl grid grid-cols-2 gap-4">
            {listItems.map(item=>{
              return (
                  <ListItem data={item}/>
              )
            })}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  )  
}

export default App