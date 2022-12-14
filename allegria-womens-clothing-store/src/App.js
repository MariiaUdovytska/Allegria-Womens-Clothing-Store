import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from './ScrollToTop';
import Footer from './Footer';
import Menu from './Menu';
import MainPage from './MainPage';
import ModalWindowTimer from './ModalWindowTimer';
import About from './about/About';
import BrandsPage from './brands/BrandsPage';
import Registration from './singInRegistrationConfirmation/Registration';
import ProductCardsPage from './productCardsPage/ProductCardsPage';
import ProductPage from './productPage/ProductPage';
import QuestionPage from './question/QuestionPage';
import Wishlist from './wishlist/Wishlist';
import Busket from './busket/Busket';

function App() {
	return (
		<div className='wrapper'>
			<div className='page'>
				<BrowserRouter basename="/Allegria-Womens-Clothing-Store">
					<ScrollToTop />
					<Menu />
					<main className='main'>
						<Routes>
							<Route exact path="/" element={<MainPage />} />
							<Route exact path="/home" element={<MainPage />} />
							<Route path="/about" element={<About />} exact />
							<Route path="/brands" element={<BrandsPage />} exact />
							<Route path="/registration" element={<Registration />} exact />
							<Route path="/productCardsPage" element={<ProductCardsPage />} exact />
							<Route path="/product" element={<ProductPage />} exact />
							<Route path="/questionPage" element={<QuestionPage />} exact />
							<Route path="/wishlist" element={<Wishlist />} exact />
							<Route path="/busket" element={<Busket />} exact />
						</Routes>
					</main>
					<Footer />
					{/* <ModalWindowTimer /> */}
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
