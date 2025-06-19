import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from './store/usersSlice';
import { fetchCars } from './store/carsSlice';
import Header from './components/Header';
import UserList from './components/UserList';
import CarList from './components/CarList';
import UsersPage from './pages/UsersPage';
import UserProfilePage from './pages/UserProfilePage';
import CarsPage from './pages/CarsPage';
import CarDetailsPage from './pages/CarDetailsPage';
import AddCarPage from './pages/AddCarPage';
import EditCarPage from './pages/EditCarPage';
import UserCarDetailsPage from './pages/UserCarDetailsPage';

function App() {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.users.users);
	const cars = useSelector((state) => state.cars.cars);

	useEffect(() => {
	dispatch(fetchUsers());
	dispatch(fetchCars());
	}, [dispatch]);

	return (
	<div className="App">
		<Header />
		<Routes>
		<Route path="/" element={<><UserList users={users} /><CarList cars={cars} /></>} />
		<Route path="/users" element={<UsersPage users={users} />} />
		<Route path="/users/:id" element={<UserProfilePage users={users} cars={cars} />} />
		<Route path="/users/:userId/cars/:carId" element={<UserCarDetailsPage users={users} cars={cars} />} />
		<Route path="/cars" element={<CarsPage cars={cars} />} />
		<Route path="/cars/:id" element={<CarDetailsPage cars={cars} />} />
		<Route path="/cars/add" element={<AddCarPage />} />
		<Route path="/cars/:id/edit" element={<EditCarPage cars={cars} />} />
		</Routes>
	</div>
	);
}

export default App;