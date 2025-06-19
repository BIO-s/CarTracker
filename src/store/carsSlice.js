import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
	return response.data.map((item) => ({
		id: item.id,
		manufacturer: `Brand${item.id}`,
		model: `Model${item.id}`,
		color: ['Red', 'Black', 'Blue'][Math.floor(Math.random() * 3)],
		vin: `VIN${item.id}X${Math.random().toString(36).substr(2, 8)}`,
		price: Math.floor(Math.random() * 1000) + 100,
		isNew: Math.random() > 0.5,
		userId: Math.floor(Math.random() * 10) + 1,
	}));
});

const carsSlice = createSlice({
	name: 'cars',
	initialState: {
	cars: [],
	status: 'idle',
	error: null,
	},
	reducers: {
	addCar: (state, action) => {
		state.cars.push(action.payload);
	},
	updateCar: (state, action) => {
		const index = state.cars.findIndex((car) => car.id === action.payload.id);
		if (index !== -1) state.cars[index] = action.payload;
	},
	deleteCar: (state, action) => {
		state.cars = state.cars.filter((car) => car.id !== action.payload);
	},
	},
	extraReducers: (builder) => {
	builder
		.addCase(fetchCars.pending, (state) => {
		state.status = 'loading';
		})
		.addCase(fetchCars.fulfilled, (state, action) => {
		state.status = 'succeeded';
		state.cars = action.payload;
		})
		.addCase(fetchCars.rejected, (state, action) => {
		state.status = 'failed';
		state.error = action.error.message;
		});
	},
});

export const { addCar, updateCar, deleteCar } = carsSlice.actions;
export default carsSlice.reducer;