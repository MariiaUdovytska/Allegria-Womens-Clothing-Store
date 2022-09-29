import React from 'react';
import '../css/productCardsPage/gridProducts.css';
import stockCards from '../data/stockCards.json';
import ProductCard from '../ProductCard';

class GridProducts extends React.Component {
	constructor(props) {
		super(props);
		this.state = { contItems: stockCards.length };
	}
	render() {
		let dataCard = stockCards;
		let arrayLi = [];

		for (let index = 0; index < dataCard.length && index < this.props.quantity; index++) {
			const element = dataCard[index];
			arrayLi.push(
				<li key={index} className='grid-products__body-items'>
					<ProductCard
						id={element.id}
						image={element.image}
						name={element.name}
						price={element.price}
						sale={element.sale}
						categories={element.categories}
						oldPrice={element.oldPrice}
					/>
				</li>);
		}
		return (
			<div className='grid-products'>
				<div className='grid-products__body'>
					{arrayLi}
				</div>
			</div>
		);
	}
}


export default GridProducts;