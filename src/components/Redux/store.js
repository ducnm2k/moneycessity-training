import { configureStore } from "@reduxjs/toolkit";
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import posts from "./Slices/posts";

export const store = configureStore({
  reducer: {
    posts: posts,
  },
});

export const useSelector = useReduxSelector;
export const useDispatch = () => useReduxDispatch();
