// Task.js
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {

  return (
    <Draggable draggableId={task?.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`p-2 bg-white border border-gray-300 mb-2 rounded ${snapshot.isDragging ? 'dragging' : ''}`}
        >
          {task.title}
        </div>
      )}
    </Draggable>
  );
};

export default Task;