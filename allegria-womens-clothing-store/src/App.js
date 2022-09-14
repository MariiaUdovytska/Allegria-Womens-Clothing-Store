import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Menu from './Menu';
import MainPage from './MainPage';
import ModalWindowTimer from './ModalWindowTimer';
import About from './about/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

function App() {
	return (
		<div className='wrapper'>
			<div className='page'>
				<BrowserRouter basename="/Allegria-Womens-Clothing-Store">
					<ScrollToTop />
					<Menu />
					<Routes>
						<Route exact path="/" element={<MainPage />} />
						<Route exact path="/home" element={<MainPage />} />
						<Route path="/about" element={<About />} exact />
					</Routes>
					<Footer />
					<ModalWindowTimer />
				</BrowserRouter>
				{/* <Menu />
				<main className='main'>
					<About />
				</main>
				<Footer />
				<ModalWindowTimer /> */}
			</div>
		</div>
	);
}

export default App;
