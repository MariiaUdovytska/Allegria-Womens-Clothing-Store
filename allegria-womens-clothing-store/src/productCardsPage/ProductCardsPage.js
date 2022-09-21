import React from 'react';
import '../css/productCardsPage/productCardsPage.css';
import FilterProdcts from './FilterProdcts';
import ProductsSide from './ProductsSide';

class ProductCardsPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='products containerM'>
				<div className='products__body'>
					<div className='products__body-sidefilter'>
						<FilterProdcts openAccordion={true} />
					</div>
					<div className='products__body-sideproducts'>
						<ProductsSide />
					</div>
				</div>
			</div>
		);
	}
}

export default ProductCardsPage;