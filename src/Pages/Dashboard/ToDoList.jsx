
import React from 'react';
import Board from './DragableTask/Board';
import { useQuery } from '@tanstack/react-query';
import useUserInfo from '../../Hooks/useUserInfo/useUserInfo';
import axios from 'axios';

const ToDoList = () => {
      const { user } = useUserInfo();

      const [tasks, setTasks] = React.useState({
            todo: [],
            ongoing: [],
            completed: [],
      });

      const { data: TodoTask, isLoading: TodoTaskLoading } = useQuery({
            queryKey: ['TodoTask'],
            queryFn: async () => {
                  const data = await fetch(`http://localhost:3000/tasks?status=todo&email=${user?.email}`);
                  return await data.json();
            }
      });

      const { data: OngoingTask, isLoading: OngoingTaskLoading } = useQuery({
            queryKey: ['OngoingTask'],
            queryFn: async () => {
                  const data = await fetch(`http://localhost:3000/tasks?status=ongoing&email=${user?.email}`);
                  return await data.json();
            }
      });

      const { data: CompletedTask, isLoading: CompletedTaskLoading } = useQuery({
            queryKey: ['CompletedTask'],
            queryFn: async () => {
                  const data = await fetch(`http://localhost:3000/tasks?status=completed&email=${user?.email}`);
                  return await data.json();
            }
      });


      const loading = TodoTaskLoading || OngoingTaskLoading || CompletedTaskLoading;

      if (loading) {
            return 'loading';
      }



      const onDragEnd = (result) => {
            if (!result.destination) return;

            const { source, destination } = result;

            console.log(result)
            axios.put()

            // Create a copy of the tasks object
            const updatedTasks = { ...tasks };

            // Remove the dragged task from the source list
            const [removedTask] = updatedTasks[source.droppableId].splice(source.index, 1);

            // Add the dragged task to the destination list
            updatedTasks[destination.droppableId].splice(destination.index, 0, removedTask);

            console.log('Updated Tasks:', updatedTasks);

            // Update the state with the new tasks
            setTasks(updatedTasks);
      };

      return (
            <div className="p-8">
                  <Board todo={TodoTask} ongoing={OngoingTask} completed={CompletedTask} onDragEnd={onDragEnd} />
            </div>
      );

};

export default ToDoList;
