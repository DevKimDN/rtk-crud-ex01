import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const toDoSlice = createSlice({
  name: "toDo",
  initialState: initialState,
  reducers: {
    addToDo: (state, action) => {
      return [...state, action.payload];
    },
    deleteToDo: (state, action) => {
      const id = action.payload;
      return state.filter((toDoItem) => toDoItem.id !== id);
    }
  }
});

export const actions = toDoSlice.actions;
export const reducer = toDoSlice.reducer;
