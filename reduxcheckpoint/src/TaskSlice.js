import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  task:[
    {
        txt:"learn html",
        isDone:true,
    },
    {
        txt:"learn css",
        isDone:true,
    },
    {
        txt:"learn js",
        isDone:false,
    },
    {
        txt:"learn react",
        isDone:true,
    },
  ]
}

export const TaskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
    addtask:(state,action)=>{
        state.task=[...state.task,action.payload]
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { addtask } = TaskSlice.actions

export default TaskSlice.reducer