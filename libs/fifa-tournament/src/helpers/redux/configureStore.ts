import { createStore, applyMiddleware, compose } from 'redux';
import { useDispatch } from 'react-redux';
import {
  createSlice,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import { mainReducer } from '@fifa-tournament/reducers';
import rootSaga from '@fifa-tournament/sagas';
// import { promiseMiddleware } from '@fifa-tournament/core/redux';

// Create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

// // const middleware = [sagaMiddleware, promiseMiddleware];
// const middlewares = [thunk, sagaMiddleware];
// // const middlewares = [sagaMiddleware];

// const composeEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) ||
//   compose;

// export const store = createStore(
//   mainReducer,
//   {},
//   composeEnhancer(applyMiddleware(...middlewares))
// );

// sagaMiddleware.run(rootSaga);

// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ serializableCheck: false, thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: mainReducer,
  middleware
});

sagaMiddleware.run(rootSaga);

// export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types