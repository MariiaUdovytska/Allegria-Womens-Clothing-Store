import React from 'react';
import '../css/busket/basketIsEmpty.css';
import basket from '../image/basket.png';
import shadowEllipse from '../image/shadowEllipse.png';

function BasketIsEmpty(props) {

	return (
		<div className='busket-empty containerM'>
			<div className='busket-empty__body'>
				<h3>Ваша корзина пуста</h3>
				<div className='busket-empty__body-imgs'>
					<img src={basket} alt='basket is empty'></img>
					<img src={shadowEllipse} alt='basket is empty'></img>
				</div>
				<p>Добавьте что-то, чтобы сэкономить время и сделать <br></br>шопинг еще более приятным.</p>
				<button type='button'>перейти в каталог</button>
			</div>
		</div>
	);
}

export default BasketIsEmpty;