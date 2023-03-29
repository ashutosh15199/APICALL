import { configureStore } from "@reduxjs/toolkit";
import MatchReducer from './Match'
export const store=configureStore({
reducer:{
    match:MatchReducer,
}
});