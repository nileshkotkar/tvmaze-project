import { configureStore } from '@reduxjs/toolkit';
import  ShowsSlice  from './CreateSlice';
import  peopleSlice from './PeopleSlice';

export const store = configureStore({
    reducer: {
        showsData: ShowsSlice,
        peopleData: peopleSlice
    }
})
