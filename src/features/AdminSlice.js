import { createSlice } from "@reduxjs/toolkit";

const initialAdminData = {
  list: [
    {
      id: 1,
      name: "Soron",
      email: "soron@gmail.com",
      cell: "+8801752281870",
      img: "./image/srn.jpg",
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
    updateData: (state, action) => {
      const { id, name, email, cell, img } = action.payload;
      const updatedList = state.list.filter((user) => user.id == id);
      if (updatedList) {
        updatedList[0].name = name;
        updatedList[0].email = email;
        updatedList[0].cell = cell;
        updatedList[0].img = img;
      }
    },
    deleteData: (state, action) => {
      const id = action.payload;
      state.list = state.list.filter((user) => user.id != id);
    },
  },
});

export const { showData, addData, deleteData, updateData } = adminSlice.actions;
export default adminSlice.reducer;
