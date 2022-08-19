import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Menu from './Menu';

function App() {
	return (
		<div className='wrapper'>
			<div className='page'>
				<Menu />
				<main className='main containerM'>
					content
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
