import React from 'react';
import '../css/productCardsPage/productCardsPage.css';
import FilterProdcts from './FilterProdcts';
import ProductsSide from './ProductsSide';

class ProductCardsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sizeWidthType: 'desktop'
		}
	}

	getWindowDimensions = () => {
		const { innerWidth: width } = window;
		return width;
	}

	handleWindowDimensions = () => {
		let width = this.getWindowDimensions()
		if (width <= 514)
			this.setState({ sizeWidthType: 'phone' });
		else if (width <= 916)
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
		switch (this.state.sizeWidthType) {
			case 'desktop': return (
				<div className='products containerM'>
					<div className='products__body'>
						<div className='products__body-sidefilter'>
							<FilterProdcts openAccordion={true} />
						</div>
						<div className='products__body-sideproducts'>
							<ProductsSide sizeWidthType={this.state.sizeWidthType} />
						</div>
					</div>
				</div>
			);
			case 'tablet': return (
				<div className='products containerM'>
					<div className='products__body'>
						<div className='products__body-filter'>
						</div>
						<ProductsSide sizeWidthType={this.state.sizeWidthType} />
					</div>
				</div>
			);
			case 'phone': return (
				<div className='products containerM'>
					<div className='products__body'>
						<div className='products__body-sideproducts'>
							<ProductsSide sizeWidthType={this.state.sizeWidthType} />
						</div>
					</div>
				</div>
			);
			default: return (<></>);
		}
	}
}
export default ProductCardsPage;