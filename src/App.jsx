import { Routes, Route } from 'react-router-dom';
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

const mockUsers = [
	{ id: 1, name: 'Cameron Konopelski', email: 'admin@mail.com' },
	{ id: 2, name: 'Teri Jaskolski', email: 'Kavon_Nienow74@hotmail.com' },
	{ id: 3, name: 'Brit Lesch', email: 'Daisy_Wolff@gmail.com' },
];

const mockCars = [
	{ id: 1, manufacturer: 'Ford', model: 'Mustang', color: 'Black', vin: '39VIT7U77526879967', price: 880.69, isNew: true, userId: 1 },
	{ id: 2, manufacturer: 'Toyota', model: 'Corolla', color: 'Red', vin: '1VRIRBUV93785614798', price: 650.00, isNew: false, userId: 1 },
];

function App() {
	return (
	<div className="App">
		<Header />
		<Routes>
		<Route path="/" element={<><UserList users={mockUsers} /><CarList cars={mockCars} /></>} />
		<Route path="/users" element={<UsersPage users={mockUsers} />} />
		<Route path="/users/:id" element={<UserProfilePage users={mockUsers} cars={mockCars} />} />
		<Route path="/users/:userId/cars/:carId" element={<UserCarDetailsPage users={mockUsers} cars={mockCars} />} />
		<Route path="/cars" element={<CarsPage cars={mockCars} />} />
		<Route path="/cars/:id" element={<CarDetailsPage cars={mockCars} />} />
		<Route path="/cars/add" element={<AddCarPage />} />
		<Route path="/cars/:id/edit" element={<EditCarPage cars={mockCars} />} />
		</Routes>
	</div>
	);
}

export default App;