// Board.js
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskList from './TaskList';

const Board = ({ todo, ongoing, completed, onDragEnd }) => {



  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <TaskList title="To Do" tasks={todo} droppableId="todo" />
        <TaskList title="Ongoing" tasks={ongoing} droppableId="ongoing" />
        <TaskList title="Completed" tasks={completed} droppableId="completed" />
      </div>
    </DragDropContext>
  );
}

export default Board;
