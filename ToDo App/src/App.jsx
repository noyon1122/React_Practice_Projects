

import './App.css'
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




function App() {
  
 

  
  const backgroundToday= document.getElementById('today') ;
  const backgroundPending= document.getElementById('pending') ;
  const backgroundOverDue= document.getElementById('overdue') ;

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleToday=()=>{
    backgroundToday.style.backgroundColor ='#02521f'
    backgroundToday.style.color='white'
     backgroundPending.style.backgroundColor =''
    backgroundPending.style.color=''
    backgroundOverDue.style.backgroundColor =''
    backgroundOverDue.style.color=''
  }

  const handlePending =()=>{
   
    backgroundPending.style.backgroundColor ='#02521f'
    backgroundPending.style.color='white'
    backgroundToday.style.backgroundColor =''
    backgroundToday.style.color=''
    backgroundOverDue.style.backgroundColor =''
    backgroundOverDue.style.color=''
  }

  const handleOverDue =()=>{
   
    backgroundOverDue.style.backgroundColor ='#02521f'
    backgroundOverDue.style.color='white'
     backgroundToday.style.backgroundColor =''
    backgroundToday.style.color=''
     backgroundPending.style.backgroundColor =''
    backgroundPending.style.color=''
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate,setStartDate]=useState(new Date());
  const [tasks,setTasks]=useState([])

  //habdle Add task

  const handleAddTasks =(e)=>{
        e.preventDefault();
        const form=e.target;
        const title=form.title.value;
        const deadline=startDate;
        const comments=form.comments.value;
        const priority=form.priority.value;

        const allTask={title,deadline,comments,priority}
        setTasks([...tasks,allTask])
      
  }

  //Delete a specific task

  const handleDelete=index=>{
    const newTask=[...tasks];
    console.log(newTask)
    newTask.splice(index,1);
    setTasks(newTask);
  }

  //Edit a spcific task

  const handleEdit =index=>{

  }


  //console.log(tasks)

  return (
    <div className='flex flex-col justify-center items-center bg-slate-200 my-12 rounded-md'>
      <div className='mx-[20%] mt-6'>
      <div className='text-center text-5xl py-3 mb-5'>
        <h1 className=''>ToDo App </h1>
       </div>

       <div className='flex w-1/2 md:w-full'>
        <button id="today" onClick={handleToday} className='bg-gray-300 px-6 md:px-12 py-1 hover:bg-gray-400 transition ease-in-out border rounded-l-md'>Today</button>
        <button id="pending" onClick={handlePending} className='bg-gray-300 px-6 md:px-12 py-1 hover:bg-gray-400 transition ease-in-out  border-t border-b'>Pending</button>
        <button id="overdue" onClick={handleOverDue} className='bg-gray-300 px-6 md:px-12 py-1 hover:bg-gray-400 transition ease-in-out  border rounded-r-md'>OverDue</button>
       </div>
       
      </div>
       <div className='flex justify-between w-2/3 mt-12 height-96'>
          <p className='text-2xl md:text-3xl font-medium'>Tasks</p>
          <button   onClick={toggleModal} className='px-4 md:px-9 py-1 flex items-end gap-2 justify-start place-content-center bg-[#02521f] text-white rounded-md hover:bg-[#195e32]'><svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5"/>
</svg>
Add Task</button>
      </div>
      <div className='bg-white p-4 border rounded-md w-full md:w-2/3 my-3'>
       {
        tasks.map((task,index )=>
          <table key={index}  className="w-full text-sm   text-gray-500 ">
      
          <tbody>
           
              <tr claclassNamess="bg-white ">
                  <th className="px-6 py-4 font-medium w-1/3 text-left">
                     {task.title}
                  </th>
                  <td className="px-6 py-4 w-1/3 text-center">
                      {new Date(task.deadline).toLocaleDateString()}
                  </td>
                 
                  <td class="px-6 py-4 w-1/3 text-center space-x-2">
                      <button onClick={()=>handleEdit(index)}  className="font-medium  text-blue-600  hover:underline">Edit</button>
                      <button onClick={()=>handleDelete(index)}  className="font-medium  text-blue-600  hover:underline">Delete</button>
                  </td>
              </tr>
          </tbody>
      </table>
    
        )
       }
        

      </div>
      <div>
    
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
          onClick={toggleModal}
        >
          <div
            className="relative p-4 w-full max-w-md bg-white rounded-lg shadow "
            onClick={(e) => e.stopPropagation()} // Prevent click on modal to close
          >
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b rounded-t ">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Task details
              </h3>
              <button
                onClick={toggleModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center "
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal body */}
            <form className="p-4" onSubmit={handleAddTasks}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Add a task title"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Priority
                  </label>
                   <select
                    id="priority"
                    name='priority'
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option  disabled className=''>Select category</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                   
                  </select>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Deadline
                  </label>
                 <DatePicker className="border p-2 rounded-md z-50" selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Comments
                  </label>
                  <textarea
                    id="comments"
                    rows="4"
                    placeholder="Add your comments to your task"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  ></textarea>
                </div>
              </div>
             <div className='flex gap-2 justify-end'>
               <button onClick={toggleModal}
               
                className=" inline-flex items-center text-[#02521f] border-2 border-[#02521f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 text-center "
              >
                
                Close
              </button>
               <button type='submit'
                className="text-white inline-flex items-center bg-[#02521f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center "
              >
              
                Add Task
              </button>
             </div>
            </form>
          </div>
        </div>
      )}
     
     
    </div>
    </div>
  )
}

export default App
