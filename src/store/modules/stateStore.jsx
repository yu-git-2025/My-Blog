import { createSlice } from "@reduxjs/toolkit";

const stateStore = createSlice({
  name: "status",
  initialState: {
    sortType: "最新",
  },
  reducers: {
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
  }
})

//解构出来actionCreater函数
const { setSortType } = stateStore.actions

//获取reducer
const reducer = stateStore.reducer

//按需导出actionCreater函数
export { setSortType }

// 默认导出reducer
export default reducer