import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '../features/postspostsSlice';

export default configureStore({
  reducer: {
    posts: postsReducer
  },
})
