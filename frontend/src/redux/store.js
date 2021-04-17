import { configureStore } from '@reduxjs/toolkit'
import aReducer from './reducers/aReducer.js'


//thunk, dev-tools is auto loaded
const store = configureStore({ reducer: aReducer, serializableCheck: false });

export default store