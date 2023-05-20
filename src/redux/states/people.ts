import { Person, Types } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/util';
import {createSlice} from '@reduxjs/toolkit'


const initialState: Person[] = []

export const peopleSlice = createSlice({
    name: 'people',
    initialState: getLocalStorage(Types.PEOPLE) ? JSON.parse(getLocalStorage(Types.PEOPLE) as string) : initialState,
    reducers: {
        addPeople:(state, action) => {
            setLocalStorage(Types.PEOPLE, state);
            return action.payload;
        }
    }
})


export const {addPeople} = peopleSlice.actions;

export default peopleSlice.reducer;