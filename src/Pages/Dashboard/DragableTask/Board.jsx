// Board.js
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskList from './TaskList';

const Board = ({ todo, ongoing, completed, onDragEnd }) => {



  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex">
        <TaskList title="To Do" tasks={todo} droppableId="todo" />
        <TaskList title="Ongoing" tasks={ongoing} droppableId="ongoing" />
        <TaskList title="Completed" tasks={completed} droppableId="completed" />
      </div>
    </DragDropContext>
  );
}

export default Board;
