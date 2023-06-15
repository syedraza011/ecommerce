import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "campus",
  data: [],
};

 const campusSlice = createSlice({
  name: "campus",
  initialState,
  reducers: {
    setAllCampuses(state, action) {
      state.data = [...action.payload.campuses];
    },
    addNewCampus(state, action) {
      state.data = [...state.data, action.payload.newCampus];
    },
    deleteCampus(state, action) {
      const filtered = state.data.filter(
        (camp) => camp.id !== action.payload.id
      );
      state.data = [...filtered];
    },
    updateCampus(state, action) {
      const payloadCamp = { ...action.payload.camp };
      const modified = state.data.map((camp) => {
        if (camp.id === payloadCamp.id) {
          camp.name = payloadCamp.name;
          camp.address = payloadCamp.address;
          camp.description = payloadCamp.description;
          camp.imageUrl = payloadCamp.imageUrl;
        }
      });

      state.data = [...modified];
    },
  },
});

export const { setAllCampuses, addNewCampus, deleteCampus, updateCampus } =
  campusSlice.actions;

export default campusSlice.reducer;
