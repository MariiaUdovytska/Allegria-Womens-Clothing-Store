import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Menu from './Menu';
import FullScreen from './FullScreen';

function App() {
	return (
		<div className='wrapper'>
			<div className='page'>
				<Menu />
				<main className='main'>
					<FullScreen />
					<div> content test</div>
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
