import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { DndContext, closestCorners } from "@dnd-kit/core"

const listItems = [
  {id:1,title:"Wash Clothes"},
  {id:2,title:"Do Homework"},
  {id:3,title:"Play Games"}
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DndContext collisionDetection={closestCorners} onDragEnd={()=>{console.log("Drag Ended")}}>
      <App listItems={listItems}/>
    </DndContext>
  </StrictMode>,
)
