import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Menu from './Menu';
import MainPage from './MainPage';
import ModalWindowTimer from './ModalWindowTimer';
import About from './about/About';

function App() {
	return (
		<div className='wrapper'>
			<div className='page'>
				<Menu />
				<main className='main'>
					<About />
				</main>
				<Footer />
				<ModalWindowTimer />
			</div>
		</div>
	);
}

export default App;
