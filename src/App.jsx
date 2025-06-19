import Header from './components/Header';
import UserList from './components/UserList';
import CarList from './components/CarList';

const mockUsers = [
	{ id: 1, name: 'Cameron Konopelski', email: 'admin@mail.com' },
	{ id: 2, name: 'Teri Jaskolski', email: 'Kavon_Nienow74@hotmail.com' },
	{ id: 3, name: 'Brit Lesch', email: 'Daisy_Wolff@gmail.com' },
];

const mockCars = [
	{ id: 1, manufacturer: 'Ford', model: 'Mustang', color: 'Black', vin: '39VIT7U77526879967', userId: 1 },
	{ id: 2, manufacturer: 'Toyota', model: 'Corolla', color: 'Red', vin: '1VRIRBUV93785614798', userId: 1 },
];

function App() {
	return (
	<div className="App">
		<Header />
		<UserList users={mockUsers} />
		<CarList cars={mockCars} />
	</div>
	);
}

export default App;