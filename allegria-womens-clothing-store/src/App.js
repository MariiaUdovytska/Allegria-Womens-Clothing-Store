import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Menu from './Menu';
import MainPage from './MainPage';
import ModalWindowTimer from './ModalWindowTimer';
import About from './about/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import BrandsPage from './brands/BrandsPage';

function App() {
	return (
		<div className='wrapper'>
			<div className='page'>
				<Menu />
				<main className='main'>
					<BrandsPage />
				</main>
				<Footer />
				{/* <BrowserRouter> <BrowserRouter basename="/Allegria-Womens-Clothing-Store">
					<ScrollToTop />
					<Menu />
					<main className='main'>
						<Routes>
							<Route exact path="/" element={<MainPage />} />
							<Route exact path="/home" element={<MainPage />} />
							<Route path="/about" element={<About />} exact />
						</Routes>
					</main>
					<Footer />
					<ModalWindowTimer />
				</BrowserRouter> */}
			</div>
		</div>
	);
}

export default App;
