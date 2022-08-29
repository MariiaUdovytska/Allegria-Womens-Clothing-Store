import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Menu from './Menu';
import MainPage from './MainPage';

function App() {
	return (
		<div className='wrapper'>
			<div className='page'>
				<Menu />
				<main className='main'>
					<MainPage />
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
