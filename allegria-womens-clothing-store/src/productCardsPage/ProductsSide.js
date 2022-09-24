import React from 'react';
import '../css/productCardsPage/productsSide.css';
import SortProducts from './SortProducts';
import ExtensionFilter from './ExtensionFilter';
import PagesGridProducts from './PagesGridProducts';
import stockCards from '../data/stockCards.json';
import OffCanvas from './OffCanvas';

class ProductsSide extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		switch (this.props.sizeWidthType) {
			case 'desktop': return (
				<div className='side-products'>
					<h1>name category</h1>
					<div className='side-products-filt'>
						<div className='side-products__filter'>
							<ExtensionFilter />
						</div>
						<div className='side-products__sort'>
							<span>{stockCards.length} товаров</span>
							<SortProducts />
						</div>
					</div>
					<PagesGridProducts productCount={stockCards.length} />
				</div>
			);
			case 'tablet': return (
				<div className='side-products'>
					<h1>name category</h1>
					<div className='side-products-filt'>
						<div className='side-products__filt-tab'>
							<div className='side-products__filt-tabs'>
								<OffCanvas placement='end' name='end' buttonName={'Фильтры'} />
							</div>
							<div className='side-products__filt-tabs'>
								{/* {['end'].map((placement, idx) => (
									<OffCanvas key={idx} placement={placement} name={placement} />
								))} */}
							</div>
						</div>
						<div className='side-products__sort'>
							<span>{stockCards.length} товаров</span>
							<SortProducts />
						</div>
					</div>
					<PagesGridProducts productCount={stockCards.length} />
				</div>
			);
			case 'phone': return (
				<div className='side-products'>
					<h1>name category</h1>
					<div className='side-products-filt'>
						<div className='side-products__filter'>
							{['end'].map((placement, idx) => (
								<OffCanvas key={idx} placement={placement} name={placement} />
							))}
						</div>
						<div className='side-products__sort'>
							<span>{stockCards.length} товаров</span>
							<SortProducts />
						</div>
					</div>
					<PagesGridProducts productCount={stockCards.length} />
				</div>
			);
			default: return (<></>);
		}
	}
}

export default ProductsSide;