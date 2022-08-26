import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Menu from './Menu';
import FullScreen from './FullScreen';
import NewArrival from './NewArrival';
import PreviewAbout from './PreviewAbout';

function App() {
	return (
		<div className='wrapper'>
			<div className='page'>
				<Menu />
				<main className='main'>
					<FullScreen />
					<NewArrival />
					<PreviewAbout />
					<div> content test</div>
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
