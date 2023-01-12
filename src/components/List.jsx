import React from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useRef } from 'react';

const List = ({todo, todoSet}) => {

    const handleDragEnd = (result)=>{
        if(!result.destination.index) return;

        const departureIndex = result.source.index;
        const destinyIndex = result.destination.index;
        
        const clonArray = [...todo];
        const [substractedData] = clonArray.splice(departureIndex, 1); // it returns an object in an object, we want the object. So we use the destructuring of array []

        clonArray.splice(destinyIndex, 0, substractedData); // this returns an array of objects, so we don't need to put the objects inside an array
        todoSet(clonArray);
    }

  return (
    <div>
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="todo">
                {(provider, snapshop) => (

                    <ul ref={provider.innerRef} {...provider.droppableProps}>
                    {todo.map((element, key)=>(
                        <Draggable draggableId={`${element.id}`} index={key} key={element.id}>
                            { (draggableProvider) => (
                            <li ref={draggableProvider.innerRef}
                            {...draggableProvider.draggableProps}
                            {...draggableProvider.dragHandleProps}
                            >{element.name}</li>
                            
                            )}
                        </Draggable>
                    ))}
                        {provider.placeHolder}
                    </ul>

                )
                }
            </Droppable>
        </DragDropContext>
    </div>
  )
}

export default List