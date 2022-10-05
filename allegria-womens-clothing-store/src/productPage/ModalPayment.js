import React from 'react';
import '../css/productPage/modalPayment.css';
import { Modal } from 'react-bootstrap';

function ModalPayment(props) {
	return (

		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<div className='modal-payment'>
				<Modal.Header closeButton>
					Оплата
				</Modal.Header>
			</div>
			<Modal.Body>
				<div className='modal__form-payment'>
					<h4>Наличными при получении</h4>
					<p>Оплата осуществляется наличными денежными средствами курьеру непосредственно при доставке заказа на адрес получателя. Выбрав данный способ оплаты, Вы получаете возможность рассмотреть и примерить заказанный товар.</p>
					<p>Если какая-то позиция Вам не подошла, Вы можете просто вернуть ее курьеру, не оплачивая.</p>
					<h4>Картой на сайте (Visa, Mastercard)</h4>
					<p>На сайте нашего интернет-магазина мы принимаем оплату платежными картами Visa и Mastercard. Безопасность проведения платежей у нас гарантирована системой eCommerceConnect с использованием современного стандарта «3-D Secure».</p>
					<h3>Доставка</h3>
					<h4>На отделение «Нова Пошта»</h4>
					<p>Доставка заказов клиентам интернет-магазина ALLEGRIA осуществляется по территории всей Украины курьерской службой "Нова пошта".</p>
				</div>
			</Modal.Body>
		</Modal>


	);
}
export default ModalPayment;