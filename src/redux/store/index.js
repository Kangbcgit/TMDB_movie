import { configureStore } from "@reduxjs/toolkit"
import movieSlice from "../slice/movie"

const rootReducer = {
  movieSlice: movieSlice,
}

const store = configureStore(rootReducer);

export default store