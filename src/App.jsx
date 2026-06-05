import ListItem  from "./components/ListItem"

import { SortableContext , arrayMove } from "@dnd-kit/sortable"

import { DndContext, closestCorners } from "@dnd-kit/core"

import { useState } from "react"

const items = [
  {id:1, title:"Wash Clothes"},
  {id:2, title:"Play Games"},
  {id:3, title:"Eat Food"}
]

const App = () =>{

  const [listItems,setItems] = useState(items)

  const handleDragEnd = (event) =>{
    const oldIndex = listItems.findIndex(item=>item.id===event.active.id)
    const newIndex = listItems.findIndex(item=>item.id===event.over?.id)
    setItems(prev=>arrayMove(listItems,oldIndex,newIndex))
  }

  return (
    <div className="min-h-screen bg-indigo-500 p-5">
      <h1 className="text-white text-center text-3xl font-bold">To Do List</h1>
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <SortableContext items={listItems} >
          <ul className="flex flex-col gap-5 bg-white p-5 mt-5 rounded-md max-w-[600px] m-auto shadow-xl">
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