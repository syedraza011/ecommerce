import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "student",
  data: [],
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setAllStudents(state, action) {
      state.data = [...action.payload.students];
    },
    addNewStudent(state, action) {
      state.data = [...state.data, action.payload.newStudent];
    },
    deleteStudent(state, action) {
      const filtered = state.data.filter(
        (student) => student.id !== action.payload.id
      );
      state.data = [...filtered];
    },
    updateStudent(state, action) {
      const payloadStudent = { ...action.payload.student };
      const modified = state.data.map((student) => {
        if (student.id === payloadStudent.id) {
          student.firstName = payloadStudent.firstName;
          student.lastName = payloadStudent.lastName;
          student.email = payloadStudent.email;
          student.imageUrl = payloadStudent.imageUrl;
        }
      });

      state.data = [...modified];
    },
  },
});

export const { setAllStudents } = studentSlice.actions;

export default studentSlice.reducer;
