import { createSlice } from "@reduxjs/toolkit";
import TranslationHelpers from "../../translations/translationHelpers";

const changeLanguageSlice = createSlice({
  name: 'changeLanguage',
  initialState: {
    languageCode: TranslationHelpers.getCurrentLanguageCode(),
  },
  reducers: {
    changeLang(state, action) {
      state.languageCode === 'ru' ? state.languageCode = 'en' : state.languageCode = 'ru';
    }
  },
});

export const { changeLang } = changeLanguageSlice.actions;
export default changeLanguageSlice.reducer;