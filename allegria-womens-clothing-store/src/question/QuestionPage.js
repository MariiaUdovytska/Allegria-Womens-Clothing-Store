import React from 'react';
import '../css/question/questionPage.css';
import { Accordion } from 'react-bootstrap';

function QuestionPage() {
	return (
		<div className='question containerM'>
			<h1>Популярные вопросы</h1>
			<div className='question__body'>
				<div className='question__body-reed'>
					<h2>ПОКУПКИ</h2>
					<div className='question__body-reed-accordion'>
						<Accordion defaultActiveKey="0">
							<Accordion.Item eventKey="0">
								<Accordion.Header>Вопрос от покупателя</Accordion.Header>
								<Accordion.Body >
									<p>Оплата осуществляется наличными денежными средствами курьеру непосредственно при доставке заказа на адрес получателя. Выбрав данный способ оплаты, Вы получаете возможность рассмотреть и примерить заказанный товар.<br></br>Если какая-то позиция Вам не подошла, Вы можете просто вернуть ее курьеру, не оплачивая.</p>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
					<div className='question__body-reed-accordion'>
						<Accordion defaultActiveKey="0">
							<Accordion.Item eventKey="1">
								<Accordion.Header>Вопрос от покупателя</Accordion.Header>
								<Accordion.Body >
									<p>Оплата осуществляется наличными денежными средствами курьеру непосредственно при доставке заказа на адрес получателя. Выбрав данный способ оплаты, Вы получаете возможность рассмотреть и примерить заказанный товар.<br></br>Если какая-то позиция Вам не подошла, Вы можете просто вернуть ее курьеру, не оплачивая.</p>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
					<div className='question__body-reed-accordion'>
						<Accordion defaultActiveKey="0">
							<Accordion.Item eventKey="1">
								<Accordion.Header>Вопрос от покупателя</Accordion.Header>
								<Accordion.Body >
									<p>Оплата осуществляется наличными денежными средствами курьеру непосредственно при доставке заказа на адрес получателя. Выбрав данный способ оплаты, Вы получаете возможность рассмотреть и примерить заказанный товар.<br></br>Если какая-то позиция Вам не подошла, Вы можете просто вернуть ее курьеру, не оплачивая.</p>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
					<div className='question__body-reed-accordion'>
						<Accordion defaultActiveKey="0">
							<Accordion.Item eventKey="1">
								<Accordion.Header>Вопрос от покупателя</Accordion.Header>
								<Accordion.Body >
									<p>Оплата осуществляется наличными денежными средствами курьеру непосредственно при доставке заказа на адрес получателя. Выбрав данный способ оплаты, Вы получаете возможность рассмотреть и примерить заказанный товар.<br></br>Если какая-то позиция Вам не подошла, Вы можете просто вернуть ее курьеру, не оплачивая.</p>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
					<div className='question__body-reed-accordion'>
						<Accordion defaultActiveKey="0">
							<Accordion.Item eventKey="1">
								<Accordion.Header>Вопрос от покупателя</Accordion.Header>
								<Accordion.Body >
									<p>Оплата осуществляется наличными денежными средствами курьеру непосредственно при доставке заказа на адрес получателя. Выбрав данный способ оплаты, Вы получаете возможность рассмотреть и примерить заказанный товар.<br></br>Если какая-то позиция Вам не подошла, Вы можете просто вернуть ее курьеру, не оплачивая.</p>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
					<div className='question__body-reed-accordion'>
						<Accordion defaultActiveKey="0">
							<Accordion.Item eventKey="1">
								<Accordion.Header>Вопрос от покупателя</Accordion.Header>
								<Accordion.Body >
									<p>Оплата осуществляется наличными денежными средствами курьеру непосредственно при доставке заказа на адрес получателя. Выбрав данный способ оплаты, Вы получаете возможность рассмотреть и примерить заказанный товар.<br></br>Если какая-то позиция Вам не подошла, Вы можете просто вернуть ее курьеру, не оплачивая.</p>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>

					<h2>ВОЗВРАТ И ОБМЕН</h2>
				</div>
				<div className='question__body-write'>test write</div>
			</div>
		</div>
	);
}

export default QuestionPage;