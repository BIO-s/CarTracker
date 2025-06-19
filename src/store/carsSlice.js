import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE = 'https://6198b49a164fa60017c23190.mockapi.io/api';

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
	const response = await axios.get(`${API_BASE}/cars`);
	return response.data;
});

export const addCar = createAsyncThunk('cars/addCar', async (newCar) => {
	const response = await axios.post(`${API_BASE}/cars`, newCar);
	return response.data;
});

export const updateCar = createAsyncThunk('cars/updateCar', async (updatedCar) => {
	const { id, ...data } = updatedCar;
	const response = await axios.put(`${API_BASE}/cars/${id}`, data);
	return response.data;
});

export const deleteCar = createAsyncThunk('cars/deleteCar', async (id) => {
	await axios.delete(`${API_BASE}/cars/${id}`);
	return id;
});

export const fetchUserCars = createAsyncThunk('cars/fetchUserCars', async (userId) => {
	const response = await axios.get(`${API_BASE}/users/${userId}/cars`);
	return response.data;
});

const carsSlice = createSlice({
	name: 'cars',
	initialState: {
		cars: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
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
			})

			.addCase(addCar.fulfilled, (state, action) => {
				state.cars.push(action.payload);
			})

			.addCase(updateCar.fulfilled, (state, action) => {
				const index = state.cars.findIndex((car) => car.id === action.payload.id);
				if (index !== -1) state.cars[index] = action.payload;
			})

			.addCase(deleteCar.fulfilled, (state, action) => {
				state.cars = state.cars.filter((car) => car.id !== action.payload);
			})

			.addCase(fetchUserCars.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchUserCars.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.cars = action.payload;
			})
			.addCase(fetchUserCars.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export default carsSlice.reducer;