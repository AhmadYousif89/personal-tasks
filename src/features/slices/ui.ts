import { createSlice } from '@reduxjs/toolkit';

import { RootState } from 'app/store';
import { AppTheme, UIState } from 'features/types';

const storedTheme = <AppTheme>localStorage.getItem('mode');

const initialState: UIState = {
  mode: storedTheme ? storedTheme : 'dark-theme',
  menuIsVisible: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleAppTheme(state) {
      state.mode = state.mode === 'dark-theme' ? 'light-theme' : 'dark-theme';
      localStorage.setItem('mode', state.mode);
    },
    toggleSideMenu(state) {
      state.menuIsVisible = !state.menuIsVisible;
    },
  },
});

export const { toggleSideMenu, toggleAppTheme } = uiSlice.actions;
export const uiSelector = (state: RootState) => state.ui;
export default uiSlice.reducer;
