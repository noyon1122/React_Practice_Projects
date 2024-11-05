
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const backgroundToday= document.getElementById('today') ;
  const backgroundPending= document.getElementById('pending') ;
  const backgroundOverDue= document.getElementById('overdue') ;
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


  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='mx-[20%] mt-6'>
      <div className='text-center text-5xl py-3'>
        <h1 className=''>ToDo App</h1>
       </div>

       <div className='flex'>
        <Link ><button id="today" onClick={handleToday} className='bg-gray-300 px-12 py-1 hover:bg-gray-400 border'>Today</button></Link>
        <Link to={'/pending'}><button id="pending" onClick={handlePending} className='bg-gray-300 px-12 py-1 hover:bg-gray-400 border-t border-b'>Pending</button></Link>
        <Link to={'/overdue'}><button id="overdue" onClick={handleOverDue} className='bg-gray-300 px-12 py-1 hover:bg-gray-400 border'>OverDue</button></Link>
       
       </div>

      </div>
     
    </div>
  )
}

export default App
