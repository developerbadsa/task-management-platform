// Task.js
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {
  console.log(task)
  return (
    <Draggable draggableId={task?._id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`p-2 bg-white border border-gray-300 mb-2 rounded ${snapshot.isDragging ? 'dragging' : ''}`}
        >
          {task?.formData.title}
        </div>
      )}
    </Draggable>
  );
};

export default Task;
