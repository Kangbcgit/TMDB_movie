import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movieData: {}
  },
  reducers: (state, action) => {
    const { type, payload } = action;
    switch ( type ) {
      case "GET_MOVIE":
      return ''
    }
  }
})

export default movieSlice