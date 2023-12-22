// ToDoList.js
import React from 'react';
import Board from './DragableTask/Board';
import { useQuery } from '@tanstack/react-query';
import useUserInfo from '../../Hooks/useUserInfo/useUserInfo';

const ToDoList = () => {
      const { user } = useUserInfo()


      const { data: TodoTask } = useQuery({
            queryKey: ['Todo Task'],
            queryFn: async () => {
                  const data = await fetch(`http://localhost:3000/tasks?status=todo&email=${user?.email}`)
                  return await data.json();
            }
      })


      //   const { data: OngoingTask } = useQuery({
      //       queryKey: ['Todo Task'],
      //       queryFn: async () => {
      //           const data =await fetch(`http://localhost:3000/tasks?status=ongoing&email=${user?.email}`)
      //           return await data.json();
      //       }
      //   })
      //   const { data: CompletedTask } = useQuery({
      //       queryKey: ['Todo Task'],
      //       queryFn: async () => {
      //           const data =await fetch(`http://localhost:3000/tasks?status=completed&email=${user?.email}`)
      //           return await data.json();
      //       }
      //   })


      console.log(TodoTask)


      const [tasks, setTasks] = React.useState({
            //     todo: [{ id: '1', title: 'Task 1' }, { id: '2', title: 'Task 2' }],
            todo: [
                  {
                    _id: '65851b9b4184dd23d9e45525',
                    formData: { title: 'fd', description: 'dsddf', date: '2023-12-01', name: 'High' },
                    status: 'todo'
                  }
                ]
              ,
            ongoing: [
                  {
                    _id: '65851b9b4184dfdfdd23d9e45525',
                    formData: { title: 'fds', description: 'dsdghgf', date: '2023-12-01', name: 'High' },
                    status: 'ongoing'
                  }
                ]
              ,
            completed: [
                  {
                    _id: '6585sdfs1b9b4184dd23d9e45525',
                    formData: { title: 'dfd', description: 'dsdsdfsf', date: '2023-12-01', name: 'High' },
                    status: 'completed'
                  }
                ]
              ,
      });




      console.log(tasks)
      const onDragEnd = (result) => {
            if (!result.destination) return;

            const { source, destination } = result;

            console.log('Source:', source);
            console.log('Destination:', destination);

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
                  <Board todo={tasks.todo} ongoing={tasks.ongoing} completed={tasks.completed} onDragEnd={onDragEnd} />
            </div>
      );
};

export default ToDoList;






// import React from "react";


// const ToDoList = () => {

//       return (
//             <div>hasbullah</div>
//             // <section className="items-center lg:flex bg-white  lg:h-screen font-poppins dark:bg-gray-800 ">
//             //       <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
//             //             <div className="pt-4 rounded shadow bg-stone-100 dark:bg-gray-900">

//             //                   <div className="flex flex-wrap items-center justify-between px-6 pb-4 border-b dark:border-gray-700">
//             //                         <h2 className="mb-4 text-xl font-bold md:mb-0 dark:text-gray-400">
//             //                               List of document
//             //                         </h2>
//             //                   </div>
//             //                   <div className="p-4 overflow-x-auto">





//             //                         {/* <table className="w-full table-auto">
//             //                               <thead>
//             //                                     <tr className="text-sm text-left text-gray-500 dark:text-gray-400">
//             //                                           <th className="flex items-center px-6 pb-3 font-medium dark:text-gray-400">
//             //                                                 <input className="mr-4" type="checkbox" name="" id="" />
//             //                                                 <span>Name</span>
//             //                                           </th>
//             //                                           <th className="px-6 pb-3 font-medium ">Owner </th>
//             //                                           <th className="px-6 pb-3 font-medium">Created </th>
//             //                                           <th className="px-6 pb-3 font-medium">Activity </th>
//             //                                           <th className="px-6 pb-3 font-medium"> Action</th>
//             //                                     </tr>
//             //                               </thead>
//             //                               <tbody>
//             //                                     <tr draggable className="text-sm bg-white dark:text-gray-400 dark:bg-gray-800">
//             //                                           <td className="flex items-center px-6 py-5 font-medium">
//             //                                                 <input className="mr-4" type="checkbox" name="" id="" />
//             //                                                 <p className="">General Purpose Report</p>
//             //                                           </td>
//             //                                           <td className="px-6 py-5 font-medium ">Branklin Ferdnaz</td>
//             //                                           <td className="px-6 py-5 font-medium ">13 jan 2022</td>
//             //                                           <td className="px-6 py-5 font-medium">
//             //                                                 <span className="text-teal-400 dark:text-teal-300">
//             //                                                       General
//             //                                                 </span>
//             //                                           </td>
//             //                                           <td className="flex items-center px-6 py-5 ">
//             //                                                 <a
//             //                                                       href="#"
//             //                                                       className="font-medium text-teal-600 hover:text-teal-500 dark:hover:text-gray-300 dark:text-teal-300"
//             //                                                 >
//             //                                                       <svg
//             //                                                             xmlns="http://www.w3.org/2000/svg"
//             //                                                             width={16}
//             //                                                             height={16}
//             //                                                             fill="currentColor"
//             //                                                             className="w-4 h-4 mr-3 bi bi-pencil-square"
//             //                                                             viewBox="0 0 16 16"
//             //                                                       >
//             //                                                             <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
//             //                                                             <path
//             //                                                                   fillRule="evenodd"
//             //                                                                   d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
//             //                                                             />
//             //                                                       </svg>
//             //                                                 </a>
//             //                                                 <a
//             //                                                       href="#"
//             //                                                       className="font-medium text-red-600 hover:text-red-500 dark:hover:text-red-300 dark:text-red-400"
//             //                                                 >
//             //                                                       <svg
//             //                                                             xmlns="http://www.w3.org/2000/svg"
//             //                                                             width={16}
//             //                                                             height={16}
//             //                                                             fill="currentColor"
//             //                                                             className="w-4 h-4 bi bi-trash-fill"
//             //                                                             viewBox="0 0 16 16"
//             //                                                       >
//             //                                                             <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
//             //                                                       </svg>
//             //                                                 </a>
//             //                                           </td>
//             //                                     </tr>
//             //                                     <tr className="text-sm dark:text-gray-400 dark:bg-transparent">
//             //                                           <td className="flex items-center px-6 py-5 font-medium">
//             //                                                 <input className="mr-4" type="checkbox" name="" id="" />
//             //                                                 <p className="">Monthly Report</p>
//             //                                           </td>
//             //                                           <td className="px-6 py-5 font-medium ">Kathryn Pearson</td>
//             //                                           <td className="px-6 py-5 font-medium ">14 jan 2022</td>
//             //                                           <td className="px-6 py-5 font-medium">
//             //                                                 <span className="text-teal-400 dark:text-teal-300">
//             //                                                       Compliance
//             //                                                 </span>
//             //                                           </td>
//             //                                           <td className="flex items-center px-6 py-5 ">
//             //                                                 <a
//             //                                                       href="#"
//             //                                                       className="font-medium text-teal-600 hover:text-teal-500 dark:hover:text-gray-300 dark:text-teal-300"
//             //                                                 >
//             //                                                       <svg
//             //                                                             xmlns="http://www.w3.org/2000/svg"
//             //                                                             width={16}
//             //                                                             height={16}
//             //                                                             fill="currentColor"
//             //                                                             className="w-4 h-4 mr-3 bi bi-pencil-square"
//             //                                                             viewBox="0 0 16 16"
//             //                                                       >
//             //                                                             <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
//             //                                                             <path
//             //                                                                   fillRule="evenodd"
//             //                                                                   d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
//             //                                                             />
//             //                                                       </svg>
//             //                                                 </a>
//             //                                                 <a
//             //                                                       href="#"
//             //                                                       className="font-medium text-red-600 hover:text-red-500 dark:hover:text-red-300 dark:text-red-400"
//             //                                                 >
//             //                                                       <svg
//             //                                                             xmlns="http://www.w3.org/2000/svg"
//             //                                                             width={16}
//             //                                                             height={16}
//             //                                                             fill="currentColor"
//             //                                                             className="w-4 h-4 bi bi-trash-fill"
//             //                                                             viewBox="0 0 16 16"
//             //                                                       >
//             //                                                             <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
//             //                                                       </svg>
//             //                                                 </a>
//             //                                           </td>
//             //                                     </tr>

//             //                               </tbody>
//             //                         </table> */}
//             //                   </div>
//             //             </div>
//             //       </div>
//             // </section>

//       );
// };

// export default ToDoList;