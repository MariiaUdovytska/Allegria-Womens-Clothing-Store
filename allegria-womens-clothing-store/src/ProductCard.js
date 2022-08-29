import React from 'react';
import './css/productCard.css';
// import { Link } from 'react-router-dom';

function ProductCard(props) {

	let showBusket = props.price !== undefined;
	// let link = `/productPage?id=${props.idProduct}`;
	// if (props.idProduct === undefined) {
	// 	link = '/';
	// }
	return (
		<div className='cardd'>
			<div className='card__body'>
				<span className='card__body-hover'>переглянути</span>
				<div className='card__body-img'>
					<img src={props.image} alt='imageProduct'></img>
					<div className='card__body-icons'>
						<div className='card__body-up-like'><i className='bi bi-heart' style={{ fontSize: '20px' }}></i></div>
						<div className='card__body-up-sale' style={{ visibility: (props.saleProduct === true ? 'visible' : 'hidden') }}><span>Sale</span></div>
					</div>
				</div>
				<div className='card__body-nameprice'>
					<h4>{props.name}</h4>
					<h5>{props.categories}</h5>
					{showBusket === true
						? <div className='card__body-nameprice-yes'>
							<div className='card__body-nameprice-price-old'><span>{props.oldPrice}</span></div>
							<div className='card__body-nameprice-price'><span>{props.price}</span></div>
						</div>
						: <div className='card__body-nameprice-instock'>
							<span className='card__body-nameprice-havnot'>не в наявності</span>
							<span className='card__body-nameprice-reportadmission'>повідомити про надходження</span>
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default ProductCard;