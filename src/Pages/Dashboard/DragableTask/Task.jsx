// Task.js
import axios from 'axios';
import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useUserInfo from '../../../Hooks/useUserInfo/useUserInfo';
import { ToastContainer, toast } from 'react-toastify';
import ReactModal from 'react-modal';
import { FcViewDetails } from "react-icons/fc";

const Task = ({ task, index, refetchAll }) => {
  const { user } = useUserInfo()
  // const [showModal, setShowModal] = useState(true)

  const id = task?._id

  const hanleDelete = (e) => {
    e.preventDefault()
    axios.delete(`https://task-management-platform-server-arzz.vercel.app/task-delete?id=${id}&email=${user?.email}`)
      .then(res => {

        if (res?.data.deletedCount) {
          toast.success(`Deleted ${task?.formData.title} Successfully`)
          refetchAll()
        }
      })





  }
  const hanleUpdate = (e) => {
    e.preventDefault()
    console.log('update')
  }



  const seeDetailsBtnHandle = () => {
    setShowModal(true)
  }
  return (
    <>
      <ToastContainer />
      {/* <ReactModal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel=""
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={{
          overlay: {
            backgroundColor: 'rgba(2, 0, 0, 0.2)',
            backdropFilter: 'blur(2px)'
          },
          content: {
            width: '450px',
            height: '300px',
            margin: 'auto',
            padding: '25px 5px',
            border: '1px solid black'
          },
        }} >


        <div className="w-full flex flex-col justify-center items-center">
          <div className=' mt-4 gap-4'>



            <div>
              <h3 className='font-bold text-xl'>{task?.formData.title}</h3>
              <p className='my-2'> <span>Task:</span>
                {task?.formData.description}
              </p>

              <div>
                Task Priority : {
                  task?.formData.name
                }
              </div>
              <div>
                Task End Date : {
                  task?.formData.date
                }
              </div>
            </div>
            <br />
            <button className="btn border mt-2" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>

        </div>
      </ReactModal> */}
      <Draggable draggableId={task?._id} index={index}>

        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`p-2 bg-white border border-gray-300 mb-2 rounded flex items-center justify-between px-8 ${snapshot.isDragging ? 'dragging' : ''}`}
          >

            <span>{task?.formData.title} </span>
            <div className='flex gap-5'>
              <FaTrashAlt onClick={hanleDelete} className='text-orange-600' title='Delete' />
              <FaEdit title='Edit' onClick={hanleUpdate}> </FaEdit>
              <FcViewDetails title='See More' onClick={seeDetailsBtnHandle} />
            </div>


          </div>
        )}
      </Draggable>

    </>
  );
};

export default Task;
