import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const burgerMenuSlice = createSlice({
  name: 'burgerMenu',
  initialState: {
    isBurgerMenuOpen: false
  },
  reducers: {
    openCloseBurgerMenu(state, action: PayloadAction<boolean>) {
      state.isBurgerMenuOpen === false ? state.isBurgerMenuOpen = true : state.isBurgerMenuOpen = false;
    }
  }, 
});

export const { openCloseBurgerMenu } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;