import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import carsReducer from './carsSlice';

export const store = configureStore({
	reducer: {
		users: usersReducer,
		cars: carsReducer,
	},
});

export default store;