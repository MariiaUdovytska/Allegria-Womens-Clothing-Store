import React from 'react';
import '../css/registration/singIn.css';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PasswordField from './PasswordField';

function SingInModal(props) {
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
				<div className='modal__form-singin'>
					<h3>ВХОД</h3>
					<Form className='modal__form-bts'>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Control type="email" placeholder="E-mail" />
						</Form.Group>
					</Form>
					<PasswordField />
				</div>
			</Modal.Body>
			<Modal.Footer>
				<div className='modal__btn'>
					<Button onClick={props.onHide}>Войти</Button>
				</div>
				<div className='modal__questions'>
					<span>Забыли пароль </span>/
					<span className='router-link'><Link to="/registration" onClick={() => this.props.onHide()} > У меня нет акаунта</Link></span>
				</div>
			</Modal.Footer>
		</Modal>
	);
}
export default SingInModal;