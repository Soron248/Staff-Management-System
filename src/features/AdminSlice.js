import { createSlice } from "@reduxjs/toolkit";

const initialAdminData = {
  list: [
    {
      id: 1,
      name: "Soron",
      email: "srn@gmail.com",
      cell: "+8801752281870",
      img: "./image/srn.jpg",
    },
    {
      id: 2,
      name: "Sezan",
      email: "szn@gmail.com",
      cell: "+8801754288855",
      img: "./image/szn.jpg",
    },
  ],
};

export const adminSlice = createSlice({
  name: "admin",
  initialState: initialAdminData,
  reducers: {
    showData: (state) => state,
    addData: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { showData, addData } = adminSlice.actions;
export default adminSlice.reducer;
