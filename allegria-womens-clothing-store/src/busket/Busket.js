import React, { useState } from 'react';
import '../css/busket/busket.css';
import stockCards from '../data/stockCards.json';
import WishlistCards from '../wishlist/WishlistCards';
import { Form, Row, Col, Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import BasketIsEmpty from './BasketIsEmpty';
import 'react-phone-number-input/style.css';

function getIds() {
	let idsArray = localStorage.getItem("idsBusket");
	if (idsArray == null)
		idsArray = [];
	else
		idsArray = JSON.parse(idsArray);
	return idsArray;
}

function arrayRemove(arr, value) {
	return arr.filter(function (element) {
		return element != value;
	});
}

function Busket(props) {
	let dataCardBusket = stockCards;
	let arrayCardsInBusket = [];
	const [idsBusket, setIdsBusket] = useState(getIds());

	let handleClickDelete = (id) => {
		let ids_l = getIds();
		ids_l = arrayRemove(ids_l, id);
		localStorage.setItem("idsBusket", JSON.stringify(ids_l));
		setIdsBusket(ids_l);
	}

	let sumPrices = 0;

	for (let index = 0; index < idsBusket.length; index++) {
		const element = dataCardBusket[idsBusket[index]];
		sumPrices += element.price;
		arrayCardsInBusket.push(
			<WishlistCards key={index} element={element} handleClickDelete={handleClickDelete} />
		);
	}
	if (idsBusket.length !== 0) {
		return (
			<div className='busket'>
				<h2 className='busket__title'>Корзина</h2>
				<div className='busket__body'>
					<div className='busket__body-person'>
						<Form noValidate>
							<Row className="mb-4">
								<Form.Group as={Col} md="9" controlId="validationCustom01">
									<Form.Control
										required
										type="text"
										placeholder="Имя"
									/>
								</Form.Group>
							</Row>
							<Row className="mb-4">
								<Form.Group as={Col} md="9" controlId="validationCustom02">
									<Form.Control
										required
										type="text"
										placeholder="Фамилия"
									/>
								</Form.Group>
							</Row>
							<Row className="mb-4">
								<Form.Group className="col-md-9" controlId="formBasicEmailRegistration">
									<Form.Control type="email" placeholder="E-mail" />
								</Form.Group>
							</Row>
							<Row className="mb-4 col-md-9">
								<PhoneInput value="" onChange={(value) => { }} placeholder="Телефон" />
							</Row>
							<div className='busket__body-person-delivery'>
								<p>Доставка</p>
								<textarea
									type="text"
									rows="2"
									id="adress"
									name="adress"
									className='busket__body-person-delivery-area col-md-9'
									placeholder='Область, город, улица, квартира'>
								</textarea>
							</div>
							<div className='busket__body-person-edit'>
								Редактировать
							</div>
							<div className='busket__body-person-discount'>
								Получить скидку
							</div>
							<div className='busket__body-person-methodpay'>
								<p>Способ оплаты</p>
								<div className='busket__body-person-methodpay-radio'>
									<div>
										<input type="radio" id="contactChoice1" name="contact" value="email"></input>
										<label htmlFor="contactChoice1">Карточкой на сайте</label>
									</div>
									<div>
										<input type="radio" id="contactChoice2" name="contact" value="phone"></input>
										<label htmlFor="contactChoice2">При получении заказа</label>
									</div>
								</div>
							</div>
							<div className='busket__body-person-btn col-md-9'>
								<button type='button' disabled>Заказать</button>
							</div>
						</Form>
					</div>
					<div className='busket__body-cards'>
						{arrayCardsInBusket}
						<div className='busket__body-cards-total'>Всего: <span>{sumPrices} UAH</span></div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<BasketIsEmpty />
		);
	}

}

export default Busket;