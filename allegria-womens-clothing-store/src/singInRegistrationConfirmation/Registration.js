import React from 'react';
import '../css/registration/registration.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import PasswordField from './PasswordField';
import SingInModal from './SingInModal';

class Registration extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		}
	}
	render() {
		return (
			<div className='registration'>
				<div className='registration__body'>
					<h2>Регистрация</h2>
					<Form noValidate className='registration__body-allforms'>
						<Row className="mb-4">
							<Form.Group as={Col} md="6" className='registration__body-margbott' controlId="validationCustom01">
								<Form.Control
									required
									type="text"
									placeholder="Имя"
								/>
							</Form.Group>
							<Form.Group as={Col} md="6" controlId="validationCustom02">
								<Form.Control
									required
									type="text"
									placeholder="Фамилия"
								/>
							</Form.Group>
						</Row>
						<Row className="mb-4">
							<PhoneInput className='col-md-6' value="" onChange={(value) => { }} placeholder="Телефон" />
							<Form.Group className="col-md-6" controlId="formBasicEmailRegistration">
								<Form.Control type="email" placeholder="E-mail" />
							</Form.Group>
						</Row>
						<Row className="mb-4">
							<PasswordField />
							<PasswordField />
						</Row>
						<Form.Group className="mb-3">
							<Form.Check
								required
								label="Подпсаться на рассылку"
								feedback="You must agree before submitting."
								feedbackType="invalid"
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Check
								required
								label={<div className='registration__body-check'>Я согласен с <span>политикой конфиденциальности</span></div>}
								feedback="You must agree before submitting."
								feedbackType="invalid"
							/>
						</Form.Group>
						<div className='registration__body-btn'>
							<Button type="submit">Зарегистрироваться</Button>
							<div className='registration__body-btn-text'>
								У меня уже есть акаунт чтобы<span onClick={() => this.setState({ show: true })}> войти</span>
								<SingInModal show={this.state.show} onHide={() => this.setState({ show: false })} />
							</div>
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

export default Registration;