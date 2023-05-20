import { Person } from "@/models";
import {configureStore} from '@reduxjs/toolkit'
import { peopleSlice } from "./states/people";
import { favoriteSlice } from "./states/favorite";

export interface AppStore{
    people: Person[];
    favorites: Person[];
}

export default configureStore<AppStore>({
    reducer: {
        people: peopleSlice.reducer,
        favorites: favoriteSlice.reducer
    }
})