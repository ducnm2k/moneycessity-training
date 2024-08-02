import { createSlice } from "@reduxjs/toolkit";

import axios from "../../Utils/axios";

// --------------------------------------------------------------------------------------
// INITIAL
const initialState = {
  isLoading: false,
  error: false,
  order_by: "publish_date",
  direction: "desc",
  audience: "free",
  content_tags: [],
  expand: [],
  hidden_from_feed: null,
  limit: 10,
  page: 1,
  platform: "",
  status: "",
  posts: [],
  post: null,
};

// --------------------------------------------------------------------------------------
// SLICE
const slice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
      state.error = false;
    },
    // ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // GET POSTS
    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },
    // GET POSTS INFINITELY

    // GET POST
    getPostSuccess(state, action) {
      state.isLoading = false;
      state.post = action.payload;
    },
  },
});

// REDUCER
export default slice.reducer;

// --------------------------------------------------------------------------------------
// FUNCTIONS
// GET POSTS
export function getPostsDefault() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading);
    try {
      const response = await axios.get("/posts", {
        params: {
          audience: "free",
          order_by: "publish_date",
          direction: "desc",
        },
      });
      dispatch(slice.actions.getPostsSuccess(response.data.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
