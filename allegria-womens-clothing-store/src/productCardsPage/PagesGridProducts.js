
import React from 'react';
import '../css/productCardsPage/pagesGridProducts.css';
import GridProducts from './GridProducts';

class PagesGridProducts extends React.Component {
	constructor(props) {
		super(props);
		this.state = { countCards: 12 }
	}
	render() {
		return (
			<div className='pages-grid-products'>
				<GridProducts quantity={this.state.countCards} />
				<button
					disabled={this.state.countCards >= this.props.productCount}
					onClick={() => this.setState({ countCards: this.state.countCards + 12 })}
					type='button'>Показать больше</button>
			</div>
		);
	}
}


export default PagesGridProducts;