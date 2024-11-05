
import { Link } from 'react-router-dom'
import './App.css'
import { useState } from 'react';



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  
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

  //habdle Add task
  const handleAddTasks =()=>{
        
  }


  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='mx-[20%] mt-6'>
      <div className='text-center text-5xl py-3 mb-5'>
        <h1 className=''>ToDo App</h1>
       </div>

       <div className='flex'>
        <Link to={'/today'}><button id="today" onClick={handleToday} className='bg-gray-300 px-12 py-1 hover:bg-gray-400 transition ease-in-out border rounded-l-md'>Today</button></Link>
        <Link to={'/pending'}><button id="pending" onClick={handlePending} className='bg-gray-300 px-12 py-1 hover:bg-gray-400 transition ease-in-out  border-t border-b'>Pending</button></Link>
        <Link to={'/overdue'}><button id="overdue" onClick={handleOverDue} className='bg-gray-300 px-12 py-1 hover:bg-gray-400 transition ease-in-out  border rounded-r-md'>OverDue</button></Link>
       </div>
       
      </div>
       <div className='flex justify-between w-2/3 mt-12 height-96'>
          <p className='text-3xl font-medium'>Tasks</p>
          <button  onClick={toggleModal} className='px-9 py-1 bg-[#02521f] text-white rounded-md hover:bg-[#195e32]'>Add Task</button>
      </div>
      <div className='bg-white p-4 border rounded-md w-2/3 mt-3'>
      <div className='m-4 border border-spacing-8 bg-slate height-[1000px]'>

     
      </div>
        <h1>This is from the task div</h1>
        <h1>This is from the task div</h1>
        <h1>This is from the task div</h1>
        <h1>This is from the task div</h1>

        <h1>This is from the task div</h1>
        <h1>This is from the task div</h1>
        <h1>This is from the task div</h1>

      </div>
      <div>
    
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
          onClick={toggleModal}
        >
          <div
            className="relative p-4 w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-700"
            onClick={(e) => e.stopPropagation()} // Prevent click on modal to close
          >
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Product
              </h3>
              <button
                onClick={toggleModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
            <form className="p-4">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Type product name"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="$2999"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option defaultValue>Select category</option>
                    <option value="TV">TV/Monitors</option>
                    <option value="PC">PC</option>
                    <option value="GA">Gaming/Console</option>
                    <option value="PH">Phones</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    placeholder="Write product description here"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Add new product
              </button>
            </form>
          </div>
        </div>
      )}
     
     
    </div>
    </div>
  )
}

export default App
