import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Menu from './Menu';
import MainPage from './MainPage';
import ModalWindow from './ModalWindow';

function App() {
	return (
		<div className='wrapper'>
			<div className='page'>
				<Menu />
				<main className='main'>
					<MainPage />
				</main>
				<Footer />
				<ModalWindow show={true} />
			</div>
		</div>
	);
}

export default App;
