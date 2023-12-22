import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUserInfo from '../../Hooks/useUserInfo/useUserInfo';


const CreateTask = () => {
      const { user } = useUserInfo()
      const { register, handleSubmit, reset } = useForm()

      const handleTaskSubmit = (data) => {
            const TaskData = {
                  formData: data,
                  email: user?.email,
                  status: 'todo'

            }

            axios.post('http://localhost:3000/create-task', TaskData)
                  .then(res => {
                        toast.success("Created Task")
                        reset()
                  })
      }
      return (
            <div className='my-4'>
                  <form className='grid px-6 py-10 gap-6' onSubmit={handleSubmit(handleTaskSubmit)}>
                        <ToastContainer />
                        <label className='flex gap-5 items-center justify-between'>
                              <span className='font-bold'> Title</span>: <input className="input input-sm input-bordered w-full lg:w-[800px] " placeholder='Type Title Of Your Task' type="text" {...register('title')} />
                        </label>
                        <label className='flex items-center gap-6 justify-between'>
                              <span className='font-bold'>Descriptions</span> : <textarea className="w-full lg:w-[800px] textarea textarea-bordered" {...register('description')}></textarea>
                        </label>
                        <div className='grid grid-cols-1 md:grid-cols-2 justify-between'>
                              <label className='flex items-center'>
                                    <span className='font-bold text-sm flex flex-nowrap'> Deadlines <span className='hidden md:flex'>(Select end Date)</span> </span>: <input className='input' type="date" {...register('date')} />
                              </label>
                              <label className='flex items-center gap-6'>
                                    <span className='font-bold'> Priority </span>:
                                    <select defaultValue='Select Priority' className='select select-bordered w-full select-sm' {...register('name')}>
                                          <option value="Select Priority" disabled>Select Priority</option>
                                          <option value="Low">Low</option>
                                          <option value="Moderate">Moderate</option>
                                          <option value="High">High</option>
                                    </select>
                              </label>
                        </div>


                        <button className="btn text-white btn-success" type='submit'>Submit</button>
                  </form>
            </div>
      );
};

export default CreateTask;