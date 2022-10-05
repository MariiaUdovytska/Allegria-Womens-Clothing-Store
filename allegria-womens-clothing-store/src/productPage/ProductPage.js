
import React from 'react';
import '../css/productPage/productPage.css';
import PreviewPopular from '../PreviewPopular';
import CardFull from './CardFull';
import ModalPayment from './ModalPayment';

class ProductPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sizeWidthType: 'desktop',
		}
	}
	getWindowDimensions = () => {
		const { innerWidth: width } = window;
		return width;
	}

	handleWindowDimensions = () => {
		let width = this.getWindowDimensions()
		if (width <= 768)
			this.setState({ sizeWidthType: 'tablet' });
		else
			this.setState({ sizeWidthType: 'desktop' });
	}

	componentDidMount() {
		this.handleWindowDimensions();
		window.addEventListener('resize', this.handleWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowDimensions);
	}
	render() {
		return (
			<div className='product-page'>
				<div className='product-page__body'>
					<CardFull sizeWidthType={this.state.sizeWidthType} />
					<PreviewPopular swiperName={'Похожие товары'} />
					<ModalPayment show={true} />
				</div>
			</div>
		);
	}
}
export default ProductPage;