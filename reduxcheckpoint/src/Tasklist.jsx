import React ,{useState} from 'react'
import TaskCard from './TaskCard'
import { useDispatch, useSelector } from 'react-redux'
import { addtask } from './TaskSlice'

const Tasklist = () => {
    const [filter, setfilter] = useState(0)
    let task=useSelector(state=>state.Task.task)
    const [newtask, setnewtask] = useState({
        txt:"",
        isDone:false
    })
    const dispatch=useDispatch()
  return (
    <div className='list'>
      <h1>To do list</h1>
      <div>
      <input onChange={(e)=>setnewtask({...newtask,txt:e.target.value})} type="text" placeholder='write task here' />
      <button onClick={()=>dispatch(addtask(newtask))}>Add</button>
      </div>
      <div>
      <button onClick={()=>setfilter(0)}>ALL</button>
      <button onClick={()=>setfilter(1)}>ISDONE</button>
      <button onClick={()=>setfilter(2)}>NOTDONE</button>
      </div>
      {filter==0?task.map(el=><TaskCard el={el}/>):filter==1?task.filter(el=>(el.isDone==true)).map(el=><TaskCard el={el}/>):task.filter(el=>(el.isDone==false)).map(el=><TaskCard el={el}/>)}
    </div>
  )
}

export default Tasklist
