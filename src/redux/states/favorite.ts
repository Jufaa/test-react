import { Person, Types } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/util';
import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

const initialState: Person[] = [];

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: getLocalStorage(Types.FAVORITE)
    ? JSON.parse(getLocalStorage(Types.FAVORITE) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Person[]>) => {
      const filteredState = current(state).filter(
        (p: Person) => p.id !== action.payload[0].id
      );
      const newState = [...filteredState, ...action.payload];
      setLocalStorage(Types.FAVORITE, newState);
      return newState;
    },
    removeFavorite: (state, action: PayloadAction<Person>) => {
      const filteredState = current(state).filter(
        (p: Person) => p.id !== action.payload.id
      );
      setLocalStorage(Types.FAVORITE, filteredState);
      return filteredState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;