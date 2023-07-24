import { configureStore } from "@reduxjs/toolkit";
import changeLangReducer  from "./changeLanguage/changeLanguageSlice";


export const store = configureStore({
  reducer: {
    changeLang: changeLangReducer,
  },
  
});


export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;