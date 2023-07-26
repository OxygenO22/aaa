import { configureStore } from "@reduxjs/toolkit";
import changeLangReducer  from "./changeLanguage/changeLanguageSlice";
import  openCloseBurgerMenuReducer  from "./burgerMenu/burgerMenuSlice";


export const store = configureStore({
  reducer: {
    changeLang: changeLangReducer,
    burgerMenu: openCloseBurgerMenuReducer,
  },
  
});


export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;