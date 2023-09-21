import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: 'movie',
  initialState: {

  },
  reducers: (state, action) => {
    const { type, payload } = action;
    switch ( type ) {
      // case
    }
  }
})

export default movieSlice