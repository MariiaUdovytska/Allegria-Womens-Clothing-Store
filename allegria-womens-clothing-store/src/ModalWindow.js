import React from 'react';
import './css/modalWindow.css';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function ModalWindow(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>

			</Modal.Header>
			<Modal.Body>
				<div className='modal__form'>
					<h3>Получите <span>10%</span> скидки</h3>
					<Form className='modal__form-bts'>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control type="email" placeholder="E-mail" />
						</Form.Group>
					</Form>
					<p>
						Подпишитесь на наши новости и получите<br></br>10% скидки на первый заказ!
					</p>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<div className='modal__btn'>
					<Button onClick={props.onHide}>Отправить</Button>
				</div>
			</Modal.Footer>
		</Modal>
	);
}
export default ModalWindow;