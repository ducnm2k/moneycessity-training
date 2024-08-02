import { configureStore } from "@reduxjs/toolkit";
import posts from "./Slices/posts";

export const store = configureStore({
  reducer: {
    posts: posts,
  },
});
