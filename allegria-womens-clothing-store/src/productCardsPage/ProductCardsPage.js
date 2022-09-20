import React from 'react';
import '../css/productCardsPage/productCardsPage.css';
import FilterProdcts from './FilterProdcts';
import SortProducts from './SortProducts';
import ExtensionFilter from './ExtensionFilter';

class ProductCardsPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='products containerM'>
				<div className='products__body'>
					<FilterProdcts />
					<div className='products__body-sadeproducts'>
						<h1>name category</h1>
						<div className='products__body-sadeproducts-filter'>
							<ExtensionFilter />
						</div>
						<div className='products__body-sadeproducts-sort'>
							<SortProducts />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductCardsPage;