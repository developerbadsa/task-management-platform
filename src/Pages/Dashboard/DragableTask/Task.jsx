// Task.js
import axios from 'axios';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useUserInfo from '../../../Hooks/useUserInfo/useUserInfo';
import { ToastContainer, toast } from 'react-toastify';

const Task = ({ task, index, refetchAll }) => {
  const { user } = useUserInfo()

  const id = task?._id

  const hanleDelete = (e) => {
    e.preventDefault()
    axios.delete(`http://localhost:3000/task-delete?id=${id}&email=${user?.email}`)
      .then(res => {

        if (res?.data.deletedCount) {
          toast.success(`Deleted ${task?.formData.title} Successfully`)
          refetchAll()
        }
      })


    console.log('delete')




  }
  const hanleUpdate = (e) => {
    e.preventDefault()
    console.log('update')
  }

  return (
    <>
      <ToastContainer />
      <Draggable draggableId={task?._id} index={index}>

        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`p-2 bg-white border border-gray-300 mb-2 rounded flex items-center justify-between px-8 ${snapshot.isDragging ? 'dragging' : ''}`}
          >

            <span>{task?.formData.title} </span> <div className='flex gap-5'><FaTrashAlt onClick={hanleDelete} className='text-orange-600' title='Delete' /> <FaEdit title='Edit' onClick={hanleUpdate}></FaEdit></div>


          </div>
        )}
      </Draggable>

    </>
  );
};

export default Task;
