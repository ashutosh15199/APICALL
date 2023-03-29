import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"

export const fetchDatas=createAsyncThunk("fetchDatas",async()=>{
const res= await fetch("https://jsonplaceholder.typicode.com/todos");
return res.json();
});
const MatchSlice= createSlice({
  name:'Match',
  initialState:{
    isLoading:false,
    data:null,
    isError:false
  },
  extraReducers:(builder)=>{
  builder.addCase(fetchDatas.pending,(state,action)=>{
    state.isLoading=true;
  });
  builder.addCase(fetchDatas.fulfilled,(state,action)=>{
    state.isLoading=false;
    state.data=action.payload;
  });
  builder.addCase(fetchDatas.rejected,(state,action)=>{
    console.log("Error",action.payload);
    state.isError=true;
  });
  }
});
export default MatchSlice.reducer;