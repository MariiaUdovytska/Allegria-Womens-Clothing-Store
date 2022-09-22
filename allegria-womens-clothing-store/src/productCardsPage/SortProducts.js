import React from 'react';
import '../css/productCardsPage/sortProducts.css';
import { Form } from 'react-bootstrap';

function SortProducts() {
	return (
		<div className='sort'>
			<span>Соритировать:</span>
			<div className='sort__accordion menu-detailed__accordion'>
				<Form.Select aria-label="Новинки">
					<option>Новинки</option>
					<option value="1">По возрастанию цены</option>
					<option value="2">По убыванию цены</option>
				</Form.Select>
			</div>
		</div>
	);
}

export default SortProducts;